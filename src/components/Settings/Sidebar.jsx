import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { settingsList } from '../../utils/helpers/settingsList';

const Sidebar = () => {
  const [selectedSetting, setSelectedSetting] = useState(settingsList[0]);

  const handleSettingSelection = (item) => () => {
    setSelectedSetting(item);
  };

  return (
    <>
      {settingsList.map((setting, index) => (
        <div key={index}>
          {setting.type === 'divider' && <Divider />}
          {setting.type !== 'divider' && (
            <ListItemButton
              selected={selectedSetting.id === setting.id}
              onClick={handleSettingSelection(setting)}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText primary={setting.name} />
            </ListItemButton>
          )}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
