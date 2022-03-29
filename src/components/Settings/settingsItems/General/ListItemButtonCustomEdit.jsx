import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import Contacts from '../../../ProfileHelpers/ProfileData/Contacts';

const ListItemButtonCustomEdit = ({
  id,
  userId,
  setEditMode,
  handleClickEdit,
  name,
  primaryName,
  contacts,
}) => {
  return (
    <ListItemButton
      id={id}
      onClick={handleClickEdit(userId, setEditMode)}
      style={{ height: '40px' }}
    >
      <h4 style={{ width: '200px', textAlign: 'left' }}>{name}</h4>
      {contacts ? (
        Object.keys(contacts).map((key, index) => (
          <Contacts
            key={index}
            contactTitle={key}
            contactValue={contacts[key]}
          />
        ))
      ) : (
        <ListItemText primary={primaryName} />
      )}
    </ListItemButton>
  );
};

export default ListItemButtonCustomEdit;
