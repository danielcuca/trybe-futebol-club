const userModel = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'passwordBcrypt'
  // senha: secret_admin
};

const validUser = {
  email: 'admin@admin.com',
  password: 'passwordBcrypt'
};


const invalidUser = {
  email: 'notExist@admin.com',
  password: 'passwordBcrypt'
};

const invalidUserPassword = {
  email: 'admin@admin.com',
  password: 'invalidBcrypt'
};


const invalidUserWhitPasswordLength = {
  email: 'notExist@admin.com',
  password: 'passw'
};

const invalidEmail = {
  email: '@admin.com',
  password: 'passwordBcrypt'
};

const userWithoutEmail = {
  password: "validpassword",
};

const userWithoutPassword = {
  email: "validemail@gmail.com",
};

const payload = {
  id: 1,
  role: "admin",
  email: "validEmail@gmail.com",
  username: "validUsername"
}

const loginError = { message: "All fields must be filled" };

const loginError2 = { message: "Invalid email or password" };


export default { userModel, validUser, invalidUser, invalidUserWhitPasswordLength, userWithoutEmail, userWithoutPassword, payload, loginError, loginError2, invalidEmail, invalidUserPassword };