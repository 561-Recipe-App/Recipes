import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <title>Login page</title>
      </head>
      <body>
        <h1>Welcome back!</h1>
        <label htmlFor="Username">Username:</label>
        <input type="text" id="Username" name="Username" />
        <label htmlFor="Password">Password:</label>
        <input type="text" id="Password" name="Password" />
        <a href=".html">
          <button>Go to Target Page</button>
        </a>
      </body>
    </html>
  );
};

export default LoginPage;
