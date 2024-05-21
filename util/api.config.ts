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
        // Board options
        create_board: { path: 'create/board', request: 'POST' },
        retrieve_board: { path: 'retrieve/board/:id', request: 'GET' },
        edit_board: {path: 'edit/board/:id', request: 'PATCH'},
        delete_board: {path: 'delete/board/:id', request: 'DELETE'},
        
        // Group options
        create_group: { path: 'create/group', request: 'POST' },
        retrieve_group: { path: 'retrieve/group/:id', request: 'GET' },
        edit_group: {path: 'edit/group/:id', request: 'PATCH'},
        delete_group: {path: 'delete/group/:id', request: 'DELETE'},

        // Note options
        create_note: { path: 'create/note', request: 'POST' },
        retrieve_note: { path: 'retrieve/note/:id', request: 'GET' },
        edit_note: {path: 'edit/note/:id', request: 'PATCH'},
        delete_note: {path: 'delete/note/:id', request: 'DELETE'},
      },
    },
  };
}
