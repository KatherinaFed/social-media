import { Typography, ListItemButton } from '@mui/material';
import { useStyles } from './navbarStyle';

const ListItemButtonCustom = ({
  index,
  selectedIndex,
  handleClick,
  component,
  name,
}) => {
  const css = useStyles();

  return (
    <ListItemButton
      selected={selectedIndex === index}
      onClick={() => handleClick(index)}
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        padding: '8px 16px',
        borderRadius: '4px',
        marginBottom: '10px',
      }}
    >
      {component}
      <Typography className={css.text}>{name}</Typography>
    </ListItemButton>
  );
};

export default ListItemButtonCustom;