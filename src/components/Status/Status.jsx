import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Input, Typography } from '@mui/material';
import { updateStatusThunk } from '../../store/profile/profileThunk';

export const useStyles = makeStyles(() => ({
  username: {
    fontSize: '24px',
  },
  status: {
    fontWeight: '300',
    marginTop: '10px',
  },
}));

export const Status = (props) => {
  const css = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const dispatch = useDispatch();

  // синхронизация происходит, когда меняется status
  // синхронизация с локальным и глобальным state с помощью хука =>
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]); // зависимость от статуса

  const activateEditMode = () => {
    if (props.isOwner) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatusThunk(status));
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <div>
          <Input
            data-testid="input"
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
            maxLength="20"
          />
          <Typography>{20 - status.length}/20</Typography>
        </div>
      ) : (
        <Typography
          style={{ fontWeight: '300', marginTop: '10px' }}
          data-testid="spanStatus"
          onClick={activateEditMode}
        >
          {status || 'Status is empty'}
        </Typography>
      )}
    </>
  );
};
