import { Card, Typography, Stack, Link as MuiLink, Chip, Box } from '@mui/joy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { type DiscoverableMcpServer } from '../types';

interface ServerCardProps {
  server: DiscoverableMcpServer;
}

export default function ServerCard({ server }: ServerCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 'sm',
      }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography level="title-lg" gutterBottom>
          {server.name}
        </Typography>
        {server.description && (
          <Typography
            level="body-sm"
            textColor="text.secondary"
            sx={{
              mb: 1,
              minHeight: '40px',
            }}>
            {server.description}
          </Typography>
        )}
        <Chip>{server.category}</Chip>

        <Box
          display="grid"
          gridTemplateColumns="auto 1fr"
          gap={1}
          rowGap={0.5}
          sx={{ mt: 3 }}>
          <Typography level="body-xs">Maintained by</Typography>
          <MuiLink
            href={server.maintainer_url}
            level="body-xs"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              minWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              display: 'block',
            }}
            endDecorator={<OpenInNewIcon sx={{ fontSize: '0.875rem' }} />}>
            {server.maintainer_name}
          </MuiLink>
          {server.documentation_url && (
            <>
              <Typography level="body-xs">Documentation</Typography>
              <MuiLink
                level="body-xs"
                href={server.documentation_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  minWidth: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
                endDecorator={<OpenInNewIcon sx={{ fontSize: '0.875rem' }} />}>
                {server.documentation_url}
              </MuiLink>
            </>
          )}
          <Typography level="body-xs">MCP URL</Typography>
          <MuiLink
            level="body-xs"
            href={server.mcp_url}
            target="_blank"
            sx={{
              minWidth: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              display: 'block',
            }}
            rel="noopener noreferrer"
            endDecorator={<OpenInNewIcon sx={{ fontSize: '0.875rem' }} />}>
            {server.mcp_url}
          </MuiLink>
        </Box>
      </Box>
      <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 1.5 }}>
        {server.authentication_types.map((authType) => (
          <Chip
            key={authType}
            size="sm"
            variant="soft"
            color={
              authType.toLowerCase().includes('oauth') ? 'success' : 'neutral'
            }>
            {authType}
          </Chip>
        ))}
        {server.dynamic_client_registration && (
          <Chip size="sm" variant="soft" color="primary">
            Dynamic Client Registration
          </Chip>
        )}
        {server.is_official && (
          <Chip size="sm" variant="soft" color="warning">
            Official
          </Chip>
        )}
      </Stack>
    </Card>
  );
}
