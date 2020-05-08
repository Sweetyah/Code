export const ucFirst = value => {
  if (typeof value === 'string') {
    return `${value.charAt(0).toUpperCase()}${value.substring(1)}`;
  }
};
