import {
  Collapse,
  FormControl,
  FormControlLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  LocalOfferOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

const formControlLabelCustom = (value, label) => (
  <FormControlLabel value={value} control={<Radio />} label={label} />
);

export const Tags = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const nameOfRadioButtons = [
    { value: 'anyone', label: 'Anyone' },
    { value: 'friendsOfFriends', label: 'Friends of Friends' },
    { value: 'friends', label: 'Friends' },
  ];

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalOfferOutlined />
        </ListItemIcon>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Tags</h4>
        <ListItemText secondary="Push, Email" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText secondary="These are notifications for when someone tags you in a comment, post or story." />
        <h4 style={{ width: 'auto', textAlign: 'left', marginTop: '10px' }}>
          Get notifications when you're tagged by:
        </h4>
        <FormControl style={{ marginLeft: '20px' }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="anyone"
            name="radio-buttons-group"
          >
            {nameOfRadioButtons.map(({ value, label }) =>
              formControlLabelCustom(value, label)
            )}
          </RadioGroup>
        </FormControl>
      </Collapse>
    </>
  );
};
