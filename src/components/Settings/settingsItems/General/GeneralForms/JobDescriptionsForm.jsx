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

export const DescriptionForm = ({ profile, setEditMode }) => {
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
        Job description
      </h4>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="lookingForAJobDescription">
          Job description
        </InputLabel>
        <OutlinedInput
          id="lookingForAJobDescription"
          name="lookingForAJobDescription"
          type="text"
          value={values.lookingForAJobDescription}
          onChange={handleChange}
          label="lookingForAJobDescription"
          size="small"
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
        Save
      </Button>
    </Box>
  );
};