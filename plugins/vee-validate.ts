import { defineRule } from "vee-validate";
import { emailRule } from "~/validators/email";
import { passwordRule } from "~/validators/password";
import { requiredRule } from "~/validators/required";

export default defineNuxtPlugin(() => {
  defineRule("required", requiredRule);
  defineRule("email", emailRule);
  defineRule("password", passwordRule);
});
