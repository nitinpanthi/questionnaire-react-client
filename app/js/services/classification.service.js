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

export const remove = classificationName => fetch(`/secured/api/classification/${classificationName}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});