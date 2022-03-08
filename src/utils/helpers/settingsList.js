import {
  Cookie,
  DarkMode,
  LocationOn,
  Lock,
  Notifications,
  Settings,
} from '@mui/icons-material';

export const settingsList = [
  { id: 's1', name: 'General', icon: <Settings /> },
  { id: 's2', name: 'Location', icon: <LocationOn /> },
  { id: 's3', name: 'Theme mode', icon: <DarkMode /> },
  { id: 's4', name: 'Cookies', icon: <Cookie /> },
  { type: 'divider' },
  { id: 's5', name: 'Notifications', icon: <Notifications /> },
  { id: 's6', name: 'Privacy', icon: <Lock /> },
];
