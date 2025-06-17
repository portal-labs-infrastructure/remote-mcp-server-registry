import {
  Card,
  CardContent,
  Divider,
  // Removed many direct UI imports as they are in sub-components
} from '@mui/joy';
import { type DiscoverableMcpServer } from '../types';

// Import the new sub-components
import ServerCardHeader from './ServerCardHeader';
import ServerCardBody from './ServerCardBody';
import ServerCardActions from './ServerCardActions';

interface ServerCardProps {
  server: DiscoverableMcpServer;
}

export default function ServerCard({ server }: ServerCardProps) {
  return (
    <Card
      sx={{
        boxShadow: 'sm',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // Adjusted gap for content sections
        }}>
        <ServerCardHeader server={server} />
        <ServerCardBody server={server} />
      </CardContent>
      <Divider sx={{ mt: 'auto' }} /> <ServerCardActions server={server} />
    </Card>
  );
}
