export const passwordUppercase = (value: string) => {
  if (!value) {
    return true;
  }

  return /^(?=.*[A-Z])/.test(value);
};

export const passwordLowercase = (value: string) => {
  if (!value) {
    return true;
  }

  return /^(?=.*[a-z])/.test(value);
};

export const passwordNumber = (value: string) => {
  if (!value) {
    return true;
  }

  return /^(?=.*\d)/.test(value);
};

export const passwordSymbol = (value: string) => {
  if (!value) {
    return true;
  }

  return /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(value);
};

export const passwordASCII = (value: string) => {
  if (!value) {
    return true;
  }

  return /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(value);
};
