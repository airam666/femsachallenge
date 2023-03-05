export function addCommas(number) {
  const ZERO = 0;
  if (!number || number <= -1) {
    return ZERO;
  }
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

export function fullDateParsed(dateTZ) {
  const INVALID = 'No date';
  if (!dateTZ) {
    return INVALID;
  }
  const date = new Date(dateTZ);

  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = date.toLocaleString('es-ES', {month: 'long'});

  const creationDate = `${day} de ${monthName}, ${year}`;
  return creationDate;
}
