import { useState } from 'react';
import cn from 'classnames';
import css from './Paginator.module.css';

export const Paginator = (props) => {
  // debugger
  const { onPageChanged, pageSize, totalUsersCount, currentPage } = props;

  const portionSize = 10;
  const [portionNumber, setPortionNumber] = useState(1);

  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPageNumber = portionNumber * portionSize;

  const leftPortionNumber = () => setPortionNumber(portionNumber - 1);
  const rightPortionNumber = () => setPortionNumber(portionNumber + 1);

  return (
    <div className={css.paginator}>
      {portionNumber > 1 && <button onClick={leftPortionNumber}>PREV</button>}
      {pages
        .filter((p) => p >= leftPageNumber && p <= rightPageNumber)
        .map((p) => (
          <span
            className={cn(
              { [css.selectedPage]: currentPage === p },
              css.pageNumber
            )}
            key={p}
            onClick={onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button onClick={rightPortionNumber}>NEXT</button>
      )}
    </div>
  );
};
