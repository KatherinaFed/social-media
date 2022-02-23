const months = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUNE',
  6: 'JULY',
  7: 'AUG',
  8: 'SEP',
  9: 'OCT',
  10: 'NOV',
  11: 'DEC',
};

export const timing = () => {
  const today = new Date();
  const minutes = today.getMinutes();
  const hours = today.getHours();
  const day = today.getUTCDate();
  const month = months[today.getUTCMonth()];
  const year = today.getUTCFullYear();

  if (minutes < '10') {
    return hours + ':0' + minutes;
  }

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};
