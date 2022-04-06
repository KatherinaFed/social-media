import {
  Collapse,
  FormControl,
  FormControlLabel,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import { LocalOfferOutlined } from '@mui/icons-material';
import { useState } from 'react';
import ListItemButtonCustom from '../customComponents/ListItemButtonCustom';

const formControlLabelCustom = (value, label, index) => (
  <FormControlLabel
    key={index}
    value={value}
    control={<Radio />}
    label={label}
  />
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
      <ListItemButtonCustom
        handleClick={handleClick}
        icon={<LocalOfferOutlined />}
        text={'Tags'}
        open={open}
      />
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
            {nameOfRadioButtons.map(({ value, label }, index) =>
              formControlLabelCustom(value, label, index)
            )}
          </RadioGroup>
        </FormControl>
      </Collapse>
    </>
  );
};
