import { ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { useState } from 'react';
import CollapseCustom from '../customComponents/CollapseCustom';
import ListItemButtonCustom from '../customComponents/ListItemButtonCustom';

export const Comments = () => {
  const [open, setOpen] = useState(false);
  const [checkedPush, setCheckedPush] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChecked = (checkedItem) => (e) => {
    if (checkedItem === 'Push') {
      setCheckedPush(e.target.checked);
    }
    if (checkedItem === 'Email') {
      setCheckedEmail(e.target.checked);
    }
  };

  return (
    <>
      <ListItemButtonCustom
        handleClick={handleClick}
        icon={<ChatBubbleOutlineOutlined />}
        text={'Comments'}
        open={open}
        push={checkedPush}
        email={checkedEmail}
      />
      <CollapseCustom
        isOpen={open}
        secondary={
          'These are notifications for comments on your posts and replies to your comments.'
        }
        handleChecked={handleChecked}
        push={checkedPush}
        email={checkedEmail}
      />
    </>
  );
};
