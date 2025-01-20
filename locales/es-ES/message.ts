import componentsIndex from "./components/index.json";
import componentsLayout from "./components/layout/index.json";

import registerPage from "./pages/auth/account/register.json";
import refreshEmailVerificationPage from "./pages/auth/account/refresh-email-verification.json";
import confirmPage from "./pages/auth/account/confirm.json";
import loginPage from "./pages/auth/session/login.json";

export default {
  page: {
    auth: {
      register: registerPage,
      refreshEmailVerification: refreshEmailVerificationPage,
      confirm: confirmPage,
      login: loginPage,
    },
  },
  components: {
    ...componentsIndex,
    layout: componentsLayout,
  },
};
