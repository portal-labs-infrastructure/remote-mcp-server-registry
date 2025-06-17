import { useColorScheme as useJoyColorScheme } from '@mui/joy/styles';

type ColorSchemeMode = {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
};

export function useColorScheme(): ColorSchemeMode {
  const { mode, systemMode, setMode } = useJoyColorScheme();

  let parsedMode: 'light' | 'dark' = 'light'; // Default to light
  // Parse the mode from the Joy UI color scheme
  if (mode === 'system' && systemMode) {
    parsedMode = systemMode;
  } else if (mode === 'light' || mode === 'dark') {
    parsedMode = mode;
  } else {
    parsedMode = 'light'; // Default to light if mode is not recognized
  }

  return { mode: parsedMode, setMode };
}
