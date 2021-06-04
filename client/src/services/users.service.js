import http from '../http-common'

class UsersDataService {
  getAll() {
    return http.get('/users')
  }
  login(data) {
    return http.post('/users/login', data)
  }
  getLogin() {
    return http.get('/users/login', {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  }
  logOut(id) {
    return http.get('/users/logout')
  }
  getById(id) {
    return http.get(`/users/${id}`)
  }
}

export default new UsersDataService()