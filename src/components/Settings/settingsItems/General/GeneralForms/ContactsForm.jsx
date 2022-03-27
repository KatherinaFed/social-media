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

export const ContactsForm = ({ profile, setEditMode }) => {
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
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        // float: 'right',
        // height: '50px',
        width: '50%',
      }}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      {Object.keys(profile.contacts).map((key, index) => {
        const Email = key === 'mainLink' && 'Email';
        console.log(values.contacts[key])

        return (
          <div key={index}>
            <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor={key}>{key}</InputLabel>
                <OutlinedInput
                  id={`contacts.${key}`}
                  name={`contacts.${key}`}
                  type="text"
                  value={values.contacts[key]}
                  onChange={handleChange}
                  label={key}
                  size="small"
                />
              </FormControl>
          </div>
        );
      })}
      <Button
        type="submit"
        variant="contained"
        style={{ marginBottom: '10px', marginTop: '5px' }}
      >
        Save
      </Button>
    </Box>
  );
};
