export const nameRule = (value: string) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length > 50) {
    return false;
  }

  return true;
};
