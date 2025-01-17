export const emailRule = (value: string) => {
  if (!value || !value.length) {
    return true;
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
    return "This field must be a valid email";
  }

  return true;
};
