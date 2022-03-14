import {
  Cookie,
  DarkMode,
  LocationOn,
  Lock,
  Notifications,
  Settings,
} from '@mui/icons-material';
import General from '../../components/Settings/settingsItems/General/General';
import Location from '../../components/Settings/settingsItems/Location';
import ThemeMode from '../../components/Settings/settingsItems/ThemeMode';
import Cookies from '../../components/Settings/settingsItems/Cookies';
import Notification from '../../components/Settings/settingsItems/Notification/Notification';
import Privacy from '../../components/Settings/settingsItems/Privacy';

export const settingsList = [
  { id: 1, name: 'General', icon: <Settings />, link: <General /> },
  { id: 2, name: 'Location', icon: <LocationOn />, link: <Location /> },
  { id: 3, name: 'Theme mode', icon: <DarkMode />, link: <ThemeMode /> },
  { id: 4, name: 'Cookies', icon: <Cookie />, link: <Cookies /> },
  { type: 'divider' },
  { id: 5, name: 'Notifications', icon: <Notifications />, link: <Notification /> },
  { id: 6, name: 'Privacy', icon: <Lock />, link: <Privacy /> },
];
