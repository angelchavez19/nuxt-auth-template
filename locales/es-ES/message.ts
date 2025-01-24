import componentsIndex from "./components/index.json";
import componentsLayout from "./components/layout/index.json";

import registerPage from "./pages/auth/account/register.json";
import refreshEmailVerificationPage from "./pages/auth/account/refresh-email-verification.json";
import confirmPage from "./pages/auth/account/confirm.json";
import loginPage from "./pages/auth/session/login.json";
import requestChangePasswordPage from "./pages/auth/password/request-change.json";
import confirmChangePassword from "./pages/auth/password/confirm-change.json";

export default {
  page: {
    auth: {
      register: registerPage,
      refreshEmailVerification: refreshEmailVerificationPage,
      confirm: confirmPage,
      login: loginPage,
      requestChange: requestChangePasswordPage,
      confirmChange: confirmChangePassword,
    },
  },
  components: {
    ...componentsIndex,
    layout: componentsLayout,
  },
};
