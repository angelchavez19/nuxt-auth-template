export const requiredRule = (value: string) => {
  if (!value || !value.length) {
    return "This field is required";
  }

  return true;
};
