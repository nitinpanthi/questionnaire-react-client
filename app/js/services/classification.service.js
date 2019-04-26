export const getAll = () => fetch('/api/classifications');

export const create = classification => fetch(
  '/secured/api/classification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(classification),
  },
);

export const remove = name => fetch(`/secured/api/classification/${name}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
