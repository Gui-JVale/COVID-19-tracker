const addZeroToDateFormat = date => date < 10 ? `0${date}` : date;

export const getDate = (date, getYesterdayDate) => {
  const month = addZeroToDateFormat((date.getMonth() + 1));
  const day = addZeroToDateFormat(getYesterdayDate ?( date.getDate() - 1) : date.getDate());
  const year = date.getFullYear();

  return `${month}-${day}-${year}`;
}


