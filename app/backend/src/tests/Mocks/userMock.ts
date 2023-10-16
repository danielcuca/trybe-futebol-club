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

const invalidUserWhitPasswordLength = {
  email: 'notExist@admin.com',
  password: 'passw'
};

const userWithoutEmail = {
  password: "validpassword",
};

const userWithoutPassword = {
  email: "validemail@gmail.com",
};

const userWithPasswordInvaldid = {
  email: "validemail@gmail.com",
  password: "passwordInvalid",
};


const loginSuccessful = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc"
};

const payload = {
  id: 1,
  role: "admin",
  email: "validEmail@gmail.com",
  username: "validUsername"
}

const loginError = { message: "All fields must be filled" };

const loginError2 = { message: "Invalid email or password" };


export default { userModel, validUser, invalidUser, invalidUserWhitPasswordLength, userWithoutEmail, userWithoutPassword, userWithPasswordInvaldid,loginSuccessful, payload, loginError, loginError2 };