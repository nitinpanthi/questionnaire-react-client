import {
  create,
  getAll,
  get,
  remove,
} from '../services/user.service';

import store from '../store';

export const TOGGLE_CREATE_USER_FORM = 'user.TOGGLE_CREATE_USER_FORM';
export const UPDATE_USER_LIST = 'user.UPDATE_USER_LIST';

export const toggleFormVisibilityActionCreator = () => ({
  type: TOGGLE_CREATE_USER_FORM,
});

export const updateUserListActionCreator = users => ({
  type: UPDATE_USER_LIST,
  value: users,
});

export const fetchUsers = () => getAll()
  .then(response => response.json());

export const saveUser = user => create(user)
  .then(fetchUsers)
  .then(store.dispatch(toggleFormVisibilityActionCreator()));

export const deleteUser = user => remove(user)
  .then(fetchUsers)
  .then(users => new Promise((resolve) => {
    store.dispatch(updateUserListActionCreator(users));
    resolve(users);
  }));
