import React from 'react';
import { useSelector } from 'react-redux';
import { settingsList } from '../../utils/helpers/settingsList';

const Main = () => {
  const { currentItemID } = useSelector((state) => state.settings);

  return (
    <>
      {settingsList.map(({ id, link }, index) => {
        const currentLink = currentItemID === id;

        return currentLink && <div key={index}>{link}</div>;
      })}
    </>
  );
};

export default Main;
