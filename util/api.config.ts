import path from 'path';

export class API {
  static endpoints = {
    root: { path: '/', request: 'GET' },
    auth: {
      path: 'auth',
      request: 'GET',
      options: {
        login: { path: 'login', request: 'GET' },
        signup: { path: 'signup', request: 'POST' },
        logout: { path: 'logout', request: 'POST' },
      },
    },
    board: {
      path: 'board',
      request: 'GET',
      options: {
        retrieve: { path: 'retrieve/:item/:id', request: 'GET' },
        create: { path: 'create/:item', request: 'POST' },
        //create_board: { path: 'create/board', request: 'POST' },
        //create_group: { path: 'create/group/:boardId', request: 'POST' },
        //create_note: { path: 'create/note/:groupId', request: 'POST' },
        edit: { path: 'edit/:item/:id', request: 'PATCH' },
        delete: { path: 'edit/:item/:id', request: 'DELETE' },
      },
    },
  };
}
