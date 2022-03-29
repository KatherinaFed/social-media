import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { profileFormSchema } from '../../../../../utils/helpers/validation';
import { saveProfileThunk } from '../../../../../store/profile/profileThunk';
import initialValuesFun from '../../../../../utils/helpers/initialValuesFunction';

const GeneralItemForm = ({ name, text, label, profile, setEditMode }) => {
  const [checked, setChecked] = useState(profile.lookingForAJob);
  const dispatch = useDispatch();

  const initialValues = initialValuesFun(profile);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema: profileFormSchema,
    onSubmit: (value, setStatus) => {
      const newValues = {
        ...value,
        lookingForAJob: checked,
      };

      dispatch(saveProfileThunk(newValues, setStatus));
      setEditMode(false);
    },
  });

  const isLookingForAJob = name === 'lookingForAJob';

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        float: 'right',
        height: '50px',
        width: '100%',
      }}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <h4 style={{ width: '300px', textAlign: 'left', marginLeft: '10px' }}>
        {text}
      </h4>
      {isLookingForAJob ? (
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChecked} />}
            label={label}
          />
        </FormGroup>
      ) : (
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor={label}>{text}</InputLabel>
          <OutlinedInput
            id={name}
            name={name}
            type="text"
            value={values[name]}
            onChange={handleChange}
            label={label}
            size="small"
          />
        </FormControl>
      )}

      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
        Save
      </Button>
    </Box>
  );
};

export default GeneralItemForm;
