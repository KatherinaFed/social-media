import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { profileFormSchema } from '../../../../../utils/helpers/validation';
import { saveProfileThunk } from '../../../../../store/profile/profileThunk';

import initialValuesFun from '../../../../../utils/helpers/initialValuesFunction';

export const NameForm = ({ profile, setEditMode }) => {
  const dispatch = useDispatch();

  const initialValues = initialValuesFun(profile);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema: profileFormSchema,
    onSubmit: (value, setStatus) => {
      dispatch(saveProfileThunk(value, setStatus));
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
        Name
      </h4>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="fullName">Name</InputLabel>
        <OutlinedInput
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          label="fullName"
          size="small"
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
        Save
      </Button>
    </Box>
  );
};
