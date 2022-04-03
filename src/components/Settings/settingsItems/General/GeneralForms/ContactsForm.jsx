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

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

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
        flexDirection: 'column',
        alignItems: 'end',
        width: '50%',
      }}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div style={{ padding: '8px 16px' }}>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Contacts</h4>
      </div>
      {Object.keys(profile.contacts).map((key, index) => {
        const isMainLink = key === 'mainLink';

        return (
          <div key={index}>
            {isMainLink ? (
              <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  id={`contacts.${key}`}
                  name={`contacts.${key}`}
                  type="text"
                  value={values.contacts[key]}
                  onChange={handleChange}
                  label="email"
                  size="small"
                />
              </FormControl>
            ) : (
              <FormControl margin="dense" fullWidth>
                <InputLabel htmlFor={key}>{capitalizeFirstLetter(key)}</InputLabel>
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
            )}
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
