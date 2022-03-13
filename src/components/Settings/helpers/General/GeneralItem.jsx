import { ListItemButton, ListItemText, OutlinedInput } from '@mui/material';

const GeneralItem = ({ profile }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
  } = profile;

  const generalList = [
    { name: 'Name', type: fullName },
    { name: 'About me', type: aboutMe },
    // {name: 'Contacts', type: contacts},
    { name: 'Looking for a job', type: lookingForAJob },
    { name: 'Job description', type: lookingForAJobDescription },
  ];

  const handleChange = (e) => {
    console.log(e.target.value)
  };

  return generalList.map(({ name, type }, index) => (
    <ListItemButton key={index} onChange={handleChange}>
      <h4 style={{ width: '200px', textAlign: 'left' }}>{name}</h4>
      <ListItemText primary={type} />
    </ListItemButton>
  ));
};

export default GeneralItem;
