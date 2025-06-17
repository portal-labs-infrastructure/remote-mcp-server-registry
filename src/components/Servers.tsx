import { useEffect, useState } from 'react';
import { Stack, Typography, Grid, CircularProgress } from '@mui/joy';
import { type DiscoverableMcpServer } from '../types';
import PublicDiscoverableServerCard from './ServerCard';

function Servers({ jsonPath }: { jsonPath: string }) {
  const [servers, setServers] = useState<DiscoverableMcpServer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
          throw new Error(
            `Failed to load MCP server list: ${response.status} ${response.statusText}`,
          );
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Loaded data is not in the expected format (array).');
        }
        // TODO: Add more robust schema validation here (e.g., using Zod)
        setServers(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'An unknown error occurred while loading data.',
        );
        console.error('Error loading MCP server list:', err);
        setServers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServers();
  }, []);

  return (
    <Stack
      sx={{
        p: { xs: 2, md: 3 },
      }}>
      {isLoading && (
        <Stack alignItems="center" justifyContent="center" sx={{ flexGrow: 1 }}>
          <CircularProgress size="lg" />
          <Typography sx={{ mt: 1 }}>Loading servers...</Typography>
        </Stack>
      )}

      {!isLoading && !error && servers.length === 0 && (
        <Typography sx={{ textAlign: 'center', mt: 4 }}>
          No MCP servers found in the registry. (Is `public/mcp-servers.json`
          empty or missing?)
        </Typography>
      )}

      {!isLoading && !error && servers.length > 0 && (
        <Grid container spacing={2.5}>
          {servers.map((server) => (
            <Grid
              xs={12}
              sm={12}
              md={6}
              xl={4}
              key={server.id || server.mcp_url}>
              <PublicDiscoverableServerCard server={server} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
}

export default Servers;
