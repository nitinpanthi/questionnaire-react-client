export const getAll = () => fetch('/secured/api/users');

export const get = userId => fetch(`/secured/api/user/${userId}`);

export const create = user => fetch('/secured/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}, user);

export const remove = userId => fetch(`/secured/api/user/${userId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
