import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';

const theme = extendTheme({
  // Your theme customizations
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>,
);
