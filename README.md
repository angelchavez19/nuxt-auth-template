# **Authentication and Authorization System**

This project is a frontend developed with Nuxt that integrates seamlessly with the authentication and authorization system in NestJS. It provides an intuitive and secure user interface for managing users, roles, permissions, and performing common tasks like registration, login, and password recovery.

## **Key Features**

1. **User Registration (Signup)**

   - User registration form.
   - Password validation indicators to improve user security.

1. **Login Interface**

   - Login screen.
   - Visual indicators during loading and authentication processes.

1. **Role-Based Dashboard**

   - Different views and components displayed according to the user's role (`ADMIN`, `USER`, and others).
   - Dynamic access control based on user permissions.

1. **Protected Routes and Navigation**

   - Protected navigation that redirects unauthenticated users to the login page.
   - Dynamic menu system that adapts based on user permissions.

1. **Password Management**

   - Interfaces for changing and recovering passwords.
   - Integration with the backend to validate recovery tokens and set a new password.

1. **Logout Functionality**

   - Logout button.
   - Confirmation messages upon logging out.

1. **Token Refresh Handling**

   - Session prolongation management.
   - Alerts to notify the user when a new login is required.

1. **Activity Auditing Display**

   - Dashboard showing recent user activities like logins and password changes.
   - Activity history for admins with filtering and search capabilities.

1. **Role and Permission Management UI**

   - Interface for managing roles and permissions, accessible only to administrators.
   - Creating, editing, and assigning roles directly from the UI.

1. **OAuth2 / Social Login Integration**

   - Social login buttons for providers like Google and GitHub.
   - Seamless integration with the backend authentication flow.

1. **Multi-Factor Authentication (MFA) Setup**

   - Setup screen to enable or disable MFA.
   - MFA code verification during login for users with MFA enabled.

---

## **Prerequisites**

- Node.js
- Nuxt.js
- Nest Auth Template

---

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/angelchavez19/nuxt-auth-template.git
   cd nuxt-auth-template
   ```

1. Install the dependencies:

   ```bash
   npm install
   ```

1. Run the development server:
   ```bash
   npm run dev
   ```

---

## **Technologies Used**

- Nuxt.js
- OAuth2

---

## **Contributions**

Contributions are welcome! Please open an **issue** or submit a **pull request**.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## **Contact**

If you have any questions, feel free to contact us:

- **Email:** infoangelchavez@gmail.com
- **GitHub:** [angelchavez19](https://github.com/angelchavez19)
- **LinkedIn:** [Angel Chávez](https://www.linkedin.com/in/angel-ch%C3%A1vez)
