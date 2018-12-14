export const getAll = () => fetch('http://localhost:8080/secured/api/classifications');

export const create = classification => fetch('http://localhost:8080/secured/api/classification/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}, classification);
