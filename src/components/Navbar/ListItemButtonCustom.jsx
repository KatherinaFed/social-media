import { Typography, ListItemButton } from '@mui/material';
import { createTheme } from '@mui/material';

const theme = createTheme();

const ListItemButtonCustom = ({
  index,
  selectedIndex,
  handleClick,
  component,
  name,
}) => {

  let color = null;

  if (name === 'Login' || name === 'Logout') {
    color = '#fff';
  } else {
    color = '#000';
  }

  const buttonSelected = selectedIndex === index && true;

  return (
    <ListItemButton
      selected={buttonSelected}
      onClick={() => handleClick(index)}
      style={{
        display: 'flex',
        alignItems: 'center',
        color: color,
        height: '60px',
      }}
    >
      {component}
      <Typography>{name}</Typography>
    </ListItemButton>
  );
};

export default ListItemButtonCustom;
