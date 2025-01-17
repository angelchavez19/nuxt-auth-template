export const passwordRule = (value: string) => {
  if (!value) {
    return true;
  }

  if (value.length < 8 || value.length > 72) {
    return "Password must be between 8 and 72 characters.";
  }

  if (!/^(?=.*[A-Z])/.test(value)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/^(?=.*[a-z])/.test(value)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/^(?=.*\d)/.test(value)) {
    return "Password must contain at least one number.";
  }

  if (!/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(value)) {
    return "Password must contain at least one special character.";
  }

  if (!/^[\x20-\x7E]+$/.test(value)) {
    return "Password must only contain ASCII printable characters.";
  }

  return true;
};
