import React from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

const FormControlCustom = ({
  name,
  type,
  text,
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <FormControl margin="normal" required fullWidth size="small">
      <InputLabel htmlFor={name}>{text}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        label={name}
      />
    </FormControl>
  );
};

export default FormControlCustom;
