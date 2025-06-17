import { Typography, Box, Link as MuiLink } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header({ githubRepoUrl }: { githubRepoUrl: string }) {
  return (
    <Box sx={{ textAlign: 'center', px: { xs: 2, md: 3 }, pt: 6, pb: 3 }}>
      <Typography
        level="h1"
        component="h1"
        gutterBottom
        maxWidth="80%"
        mx="auto">
        Remote MCP Server Registry
      </Typography>
      <Typography
        level="body-lg"
        textColor="text.secondary"
        sx={{ mb: 2 }}
        maxWidth={{ sx: '90%', md: '600px' }}
        mx="auto">
        A community-maintained list of Model Context Protocol (MCP) servers that
        can be used directly without local installation.
      </Typography>
      <MuiLink
        href={githubRepoUrl}
        target="_blank"
        rel="noopener noreferrer"
        startDecorator={<GitHubIcon />}
        sx={{ display: 'inline-flex', alignItems: 'center' }}>
        Contribute or add your server on GitHub!
      </MuiLink>
    </Box>
  );
}

export default Header;
