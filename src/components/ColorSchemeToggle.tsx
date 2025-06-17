import React from 'react';
import { Box, IconButton } from '@mui/joy';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useColorScheme } from '../hooks/useColorScheme';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="soft" color="neutral" />;
  }
  return (
    <Box position="absolute" top={16} right={16} zIndex={1000}>
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}>
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Box>
  );
}

export default ColorSchemeToggle;
