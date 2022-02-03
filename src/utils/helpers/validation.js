import * as Yup from 'yup';

export const logInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  captcha: Yup.string(),
});

export const profileFormSchema = Yup.object({
  fullName: Yup.string(),
  aboutMe: Yup.string(),
  contacts: Yup.object().shape({
    facebook: Yup.string().url(),
    github: Yup.string().url(),
    instagram: Yup.string().url(),
    mainLink: Yup.string().url(),
    twitter: Yup.string().url(),
    vk: Yup.string().url(),
    website: Yup.string().url(),
    youtube: Yup.string().url(),
  }),
  lookingForAJob: Yup.boolean(),
  lookingForAJobDescription: Yup.string(),
});