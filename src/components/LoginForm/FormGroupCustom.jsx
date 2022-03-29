import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const FormGroupCustom = ({ id, name, checked, handleChecked }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            size="small"
            checked={checked}
            onChange={handleChecked}
          />
        }
        label={name}
      />
    </FormGroup>
  );
};

export default FormGroupCustom;
