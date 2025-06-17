import { Box, Typography } from '@mui/joy';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
      }}>
      <Typography level="body-sm">
        MCP Remote Server Registry &copy; {new Date().getFullYear()}
      </Typography>
      <Typography level="body-sm">Powered by the community</Typography>
    </Box>
  );
}
