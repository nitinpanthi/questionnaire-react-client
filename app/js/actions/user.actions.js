import {
  LOAD_USER,
  FETCH_USERS,
} from './types';

import {
  create,
  getAll,
  get,
  remove,
} from '../services/user.service';

export const fetchUsers = () => (dispatch) => {
  getAll()
    .then(response => response.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      users,
    }));
};

export const createUser = (user) => {
  create(user)
    .then(fetchUsers());
};

export const removeUser = (user) => {
  remove(user)
    .then(fetchUsers());
};

export const loadUser = email => (dispatch) => {
  get(email)
    .then(response => response.json())
    .then(user => dispatch({
      type: LOAD_USER,
      user,
    }));
};
