import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { profileFormSchema } from '../../../utils/helpers/validation';
import { saveProfileThunk } from '../../../store/profile/profileThunk';

const ProfileForm = ({ setEditMode }) => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const initialValues = {
    fullName: !profile.fullName ? '' : profile.fullName,
    aboutMe: !profile.aboutMe ? '' : profile.aboutMe,
    contacts: {
      facebook: !profile.contacts.facebook ? '' : profile.contacts.facebook,
      github: !profile.contacts.github ? '' : profile.contacts.github,
      instagram: !profile.contacts.instagram ? '' : profile.contacts.instagram,
      mainLink: !profile.contacts.mainLink ? '' : profile.contacts.mainLink,
      twitter: !profile.contacts.twitter ? '' : profile.contacts.twitter,
      vk: !profile.contacts.vk ? '' : profile.contacts.vk,
      website: !profile.contacts.website ? '' : profile.contacts.website,
      youtube: !profile.contacts.youtube ? '' : profile.contacts.youtube,
    },
    lookingForAJob: !profile.lookingForAJob ? '' : profile.lookingForAJob,
    lookingForAJobDescription: !profile.lookingForAJobDescription
      ? ''
      : profile.lookingForAJobDescription,
  };

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
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="fullName">Full name</InputLabel>
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
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="aboutMe">About me</InputLabel>
          <OutlinedInput
            id="aboutMe"
            name="aboutMe"
            type="text"
            value={values.aboutMe}
            onChange={handleChange}
            label="aboutMe"
            size="small"
          />
        </FormControl>
        <h3>Contacts:</h3>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <FormControl margin="normal" fullWidth>
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
        <h3>I am looking for a job:</h3>
        <FormGroup>
          <FormControlLabel
            id="checkbox"
            name="checkbox"
            control={<Checkbox onChange={handleChange} />}
            label="Yes"
          />
        </FormGroup>
        <h3>Professional skills:</h3>
        <FormControl margin="normal" fullWidth>
          <OutlinedInput
            id="lookingForAJobDescription"
            name="lookingForAJobDescription"
            type="text"
            value={values.lookingForAJobDescription}
            onChange={handleChange}
            size="small"
          />
        </FormControl>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Save profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;
