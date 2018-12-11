export default class ClassificationService {
  create(name) {
    return fetch('http://localhost:8080/secured/api/classification/' + name, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  remove(id) {
    return fetch('http://localhost:8080/secured/api/classification/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })S
  }

  getAll() {
    return fetch('http://localhost:8080/api/classifications');
  }
}