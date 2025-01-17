# **Authentication and Authorization System**

This project is a robust authentication and authorization system developed with Nuxt.js. It allows user management, route protection, and access control through roles and permissions. Additionally, it incorporates advanced features such as OAuth2 support, multi-factor authentication, and activity auditing.

---

## **Key Features**

1. **User Registration (Signup)**

   - Allows users to create an account through a registration form.
   - Data validation and email confirmation.

1. **Login**

   - Users can authenticate by entering their credentials.
   - JWT tokens are generated for secure sessions.

1. **JWT Authentication**

   - Uses JWT to handle user authentication.
   - Tokens are signed with a secret key to verify their authenticity.

1. **Role-Based Authorization**

   - Roles like `ADMIN`, `USER`, or others are assigned dynamically.
   - Specific permissions are granted according to the assigned role.

1. **Route Protection**

   - Routes are restricted based on authentication and assigned roles.
   - Middleware is used to validate access.

1. **Password Change and Recovery**

   - Requests for password resets via email confirmation.
   - Token expiration for enhanced security.

1. **Logout**

   - Invalidates the JWT to terminate the user session.

1. **Token Refresh**

   - Implements refresh tokens to maintain active sessions without needing a new login.

1. **Auditing and Logs**

   - Records key activities such as logins, and password changes.

1. **Dynamic Roles and Permission Management**

   - Create, update, and assign roles dynamically at runtime.

1. **OAuth2 / Social Login Support**

   - Allows authentication through providers like Google and GitHub.

1. **Multi-Factor Authentication (MFA)**

   - Adds an extra layer of security with multi-factor authentication.

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
