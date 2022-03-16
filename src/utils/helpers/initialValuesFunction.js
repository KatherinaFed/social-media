const initialValuesFun = (profile) => {
  return {
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
};

export default initialValuesFun;