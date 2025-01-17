export const nameRule = (value: string) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length > 50) {
    return "This field expects a maximum of 50 characters.";
  }

  return true;
};
