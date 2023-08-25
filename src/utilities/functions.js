export const parseTitleToUrl = (title) => {
  return title
    .toLowerCase()
    .replaceAll(',', '')
    .replaceAll("'", '')
    .split(' ')
    .join('-');
};

export const getChildNodeNames = (level, text, nodes) => {
  if (level === 3) {
    return [text.split(': ')[1]];
  } else if (level === 2) {
    return nodes.map((n) => n.text.split(': ')[1]);
  } else if (level === 1) {
    const childNodes = [];
    nodes.forEach((n) => {
      childNodes.push(...n.nodes.map((n) => n.text.split(': ')[1]));
    });
    return childNodes;
  }
};

export const validateEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};
