import { useState } from 'react';
import { useStyles } from './paginatorStyle';
import { Pagination } from '@mui/material';

export const Paginator = ({ page, pageSize, totalUsersCount, onPageChanged }) => {
  const css = useStyles();

  const count = Math.ceil(totalUsersCount / pageSize);

  const handleChange = (e, p) => {
    e.preventDefault();

    onPageChanged(p);
  };

  return (
    <Pagination
      count={count}
      page={page}
      onChange={handleChange}
      className={css.paginator}
      showFirstButton
      showLastButton
    />
  );
};
