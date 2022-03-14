import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { profileFormSchema } from '../../../../utils/helpers/validation';
import { saveProfileThunk } from '../../../../store/profile/profileThunk';

const initialValuesFun = (profile) => {
  return {
    fullName: !profile.fullName ? '' : profile.fullName,
    aboutMe: !profile.aboutMe ? '' : profile.aboutMe,
    // contacts: {
    //   facebook: !profile.contacts.facebook ? '' : profile.contacts.facebook,
    //   github: !profile.contacts.github ? '' : profile.contacts.github,
    //   instagram: !profile.contacts.instagram ? '' : profile.contacts.instagram,
    //   mainLink: !profile.contacts.mainLink ? '' : profile.contacts.mainLink,
    //   twitter: !profile.contacts.twitter ? '' : profile.contacts.twitter,
    //   vk: !profile.contacts.vk ? '' : profile.contacts.vk,
    //   website: !profile.contacts.website ? '' : profile.contacts.website,
    //   youtube: !profile.contacts.youtube ? '' : profile.contacts.youtube,
    // },
    lookingForAJob: !profile.lookingForAJob ? '' : profile.lookingForAJob,
    lookingForAJobDescription: !profile.lookingForAJobDescription
      ? ''
      : profile.lookingForAJobDescription,
  };
};

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

export const AboutMeForm = ({ profile, setEditMode }) => {
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
        About me
      </h4>
      <FormControl margin="normal" required fullWidth>
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
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
        Save
      </Button>
    </Box>
  );
};


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
        About me
      </h4>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="lookingForAJobDescription">Description job</InputLabel>
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
