export const parseTitleToUrl = (title) => {
  return title
    .toLowerCase()
    .replaceAll(',', '')
    .replaceAll("'", '')
    .split(' ')
    .join('-');
};
