import React from 'react';
import { Stack, Avatar, Typography, Link as MuiLink } from '@mui/joy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { type DiscoverableMcpServer } from '../types';

interface ServerCardHeaderProps {
  server: Pick<
    DiscoverableMcpServer,
    'name' | 'icon_url' | 'maintainer_name' | 'maintainer_url'
  >;
}

export default function ServerCardHeader({ server }: ServerCardHeaderProps) {
  return (
    <Stack direction="row" gap={1.5} alignItems="center">
      <Avatar
        size="lg"
        variant="outlined"
        src={server.icon_url}
        alt={server.name}
        sx={{
          borderRadius: 'lg',
        }}
      />
      <Stack>
        <Typography level="title-lg">{server.name}</Typography>
        {server.maintainer_name && server.maintainer_url && (
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
        )}
      </Stack>
    </Stack>
  );
}
