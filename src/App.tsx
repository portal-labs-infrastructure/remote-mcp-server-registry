import { Divider, Box } from '@mui/joy';
import Footer from './components/Footer';
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import Servers from './components/Servers';

// --- Configuration ---
// Path to the JSON file within the 'public' directory
const LOCAL_JSON_PATH = '/mcp-servers.json'; // Fetched as a static asset
const GITHUB_REPO_URL =
  'https://github.com/portal-labs-infrastructure/remote-mcp-server-registry';
// --- End Configuration ---

function App() {
  return (
    <Box>
      <ColorSchemeToggle />
      <Header githubRepoUrl={GITHUB_REPO_URL} />
      <Servers jsonPath={LOCAL_JSON_PATH} />
      <Divider />
      <Footer />
    </Box>
  );
}

export default App;
