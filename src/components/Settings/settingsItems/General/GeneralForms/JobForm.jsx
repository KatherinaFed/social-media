import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { profileFormSchema } from '../../../../../utils/helpers/validation';
import { saveProfileThunk } from '../../../../../store/profile/profileThunk';
import initialValuesFun from '../../../../../utils/helpers/initialValuesFunction';

export const LookingForAJobForm = ({ profile, setEditMode }) => {
  const [checked, setChecked] = useState(profile.lookingForAJob);
  const dispatch = useDispatch();

  const initialValues = initialValuesFun(profile);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const { handleSubmit } = useFormik({
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
        Looking for a job
      </h4>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChecked} />}
          label="Yes"
        />
      </FormGroup>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
        Save
      </Button>
    </Box>
  );
};
