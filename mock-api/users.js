export const users = [
  {
    id: 1,
    login: 'admin',
    password: 'admin123',
    name: 'Anna Admin',
    role: 'admin',
    token: 'mock-token-admin',
  },
  {
    id: 2,
    login: 'student',
    password: 'student123',
    name: 'Bartek Student',
    role: 'user',
    token: 'mock-token-student',
  },
];

export const buildSession = (user) => ({
  token: user.token,
  user: {
    id: user.id,
    login: user.login,
    name: user.name,
    role: user.role,
  },
});

export const findByCredentials = (login, password) =>
  users.find((user) => user.login === login && user.password === password);

export const findByToken = (token) => users.find((user) => user.token === token);
