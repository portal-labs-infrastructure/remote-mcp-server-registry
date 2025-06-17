import { Stack, Typography, Chip, Box, Link as MuiLink } from '@mui/joy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { LocalOfferOutlined } from '@mui/icons-material';
import { type DiscoverableMcpServer } from '../../types';

interface ServerCardBodyProps {
  server: Pick<
    DiscoverableMcpServer,
    | 'category'
    | 'description'
    | 'mcp_url'
    | 'authentication_types'
    | 'dynamic_client_registration'
    | 'is_official'
  >;
}

export default function ServerCardBody({ server }: ServerCardBodyProps) {
  return (
    <Stack gap={2} sx={{ flexGrow: 1 }}>
      {' '}
      {/* Allow this stack to grow */}
      {server.category && (
        <Chip
          variant="outlined"
          startDecorator={<LocalOfferOutlined sx={{ fontSize: 'md' }} />}
          sx={{ p: 0.5, px: 1.5, alignSelf: 'flex-start' }}>
          {server.category}
        </Chip>
      )}
      {server.description && (
        <Box sx={{ flexGrow: 1 }}>
          {' '}
          {/* This Box will take up available space, pushing chips down */}
          <Typography
            level="body-sm"
            textColor="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3, // Allow up to 3 lines for description
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            {server.description}
          </Typography>
        </Box>
      )}
      {/* MCP URL and Metadata Chips will be at the bottom of this component */}
      <Stack gap={2} sx={{ mt: server.description ? 0 : 'auto' }}>
        {' '}
        {/* Push to bottom if no description */}
        {server.mcp_url && (
          <MuiLink
            level="body-xs"
            href={server.mcp_url}
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
            {server.mcp_url}
          </MuiLink>
        )}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ flexWrap: 'wrap', gap: 0.5 }} // Use gap for consistent spacing
          useFlexGap // Ensures gap works correctly with wrapping items
        >
          {server.authentication_types?.map((authType) => (
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
              Dynamic Client Reg
            </Chip>
          )}
          {server.is_official && (
            <Chip size="sm" variant="soft" color="warning">
              Official
            </Chip>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
