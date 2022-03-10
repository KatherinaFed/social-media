import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { settingsList } from '../../utils/helpers/settingsList';
import { setSettingID } from '../../store/settings/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const { currentItemID } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleSettingSelection = (itemId) => () => {
    dispatch(setSettingID(itemId));
  };

  return (
    <>
      {settingsList.map(({ id, name, icon, type }, index) => (
        <div key={index}>
          {type === 'divider' && <Divider />}
          {type !== 'divider' && (
            <ListItemButton
              selected={currentItemID === id}
              onClick={handleSettingSelection(id)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          )}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
