import { defineRule, configure } from "vee-validate";
import { required, email, between, min, max } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import { nameRule } from "~/validators/name";
import {
  passwordUppercase,
  passwordLowercase,
  passwordNumber,
  passwordSymbol,
  passwordASCII,
} from "~/validators/password";

export default defineNuxtPlugin(() => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("name", nameRule);
  defineRule("between", between);
  defineRule("passwordUppercase", passwordUppercase);
  defineRule("passwordLowercase", passwordLowercase);
  defineRule("passwordNumber", passwordNumber);
  defineRule("passwordSymbol", passwordSymbol);
  defineRule("passwordASCII", passwordASCII);
  defineRule("min", min);
  defineRule("max", max);

  configure({
    generateMessage: localize({
      en: {
        messages: {
          required: "This field is required",
          email: "Invalid email",
          name: "This field expects a maximum of 50 characters.",
          between:
            "This field must contain between 0:{min} and 1:{max} characters",
          passwordUppercase:
            "The password must contain at least one uppercase letter",
          passwordLowercase:
            "The password must contain at least one lowercase letter",
          passwordNumber: "The password must contain at least one number",
          passwordSymbol:
            "The password must contain at least one special character",
          passwordASCII:
            "The password must only contain ASCII printable characters.",
          min: "",
          max: "",
        },
      },
      es: {
        messages: {
          required: "Este campo es obligatorio",
          email: "Correo electrónico no válido",
          name: "Este campo espera un máximo de 50 caracteres.",
          between:
            "Este campo debe contener entre 0:{min} y 1:{max} caracteres",
          passwordUppercase:
            "La contraseña debe contener al menos una letra mayúscula",
          passwordLowercase:
            "La contraseña debe contener al menos una letra minúscula",
          passwordNumber: "La contraseña debe contener al menos un número",
          passwordSymbol:
            "La contraseña debe contener al menos un carácter especial",
          passwordASCII:
            "La contraseña solo debe contener caracteres ASCII imprimibles.",
          min: "Debe contener al menos 0:{min} caracteres",
          max: "Debe contener máximo 0:{max} caracteres",
        },
      },
    }),
  });
});
