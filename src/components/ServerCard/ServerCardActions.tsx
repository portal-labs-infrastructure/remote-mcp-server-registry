import React, { useState } from 'react';
import { Button, CardActions, Snackbar } from '@mui/joy';
import { Article, ContentCopy, CheckCircleOutline } from '@mui/icons-material';
import { type DiscoverableMcpServer } from '../../types';

interface ServerCardActionsProps {
  server: Pick<DiscoverableMcpServer, 'documentation_url' | 'mcp_url'>;
}

export default function ServerCardActions({ server }: ServerCardActionsProps) {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyMcpUrl = () => {
    if (server.mcp_url) {
      navigator.clipboard
        .writeText(server.mcp_url)
        .then(() => {
          setCopied(true);
          setSnackbarOpen(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy MCP URL: ', err);
        });
    }
  };

  return (
    <>
      <CardActions>
        {server.documentation_url && (
          <Button
            fullWidth
            variant="outlined"
            color="neutral"
            startDecorator={<Article />}
            component="a"
            href={server.documentation_url}
            target="_blank"
            rel="noopener noreferrer">
            Docs
          </Button>
        )}
        <Button
          fullWidth
          variant="solid"
          color="primary"
          startDecorator={copied ? <CheckCircleOutline /> : <ContentCopy />}
          onClick={handleCopyMcpUrl}
          disabled={!server.mcp_url}>
          {copied ? 'Copied URL' : 'Copy URL'}
        </Button>
      </CardActions>
      <Snackbar
        autoHideDuration={2000}
        open={snackbarOpen}
        variant="soft"
        color="success"
        onClose={(_, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setSnackbarOpen(false);
        }}
        startDecorator={<CheckCircleOutline />}
        sx={{ boxShadow: 'lg' }}>
        MCP URL copied to clipboard!
      </Snackbar>
    </>
  );
}
