export class API {
  static endpoints = {
    root: { path: '/', request: 'GET' },
    auth: {
      path: 'auth',
      request: 'GET',
      options: {
        login: { path: 'login', request: 'POST' },
        signup: { path: 'signup', request: 'POST' },
        logout: { path: 'logout', request: 'POST' },
      },
    },
  };
}
