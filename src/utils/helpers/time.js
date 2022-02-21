export const timing = () => {
  const today = new Date();

  if (today.getMinutes() < '10') {
    return today.getHours() + ':0' + today.getMinutes();
  }

  return today.getHours() + ':' + today.getMinutes();
};
