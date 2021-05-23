import http from '../http-common'

class UsersDataService {
  getAll() {
    return http.get('/users')
  }
  login(data) {
    return http.post('/users/login', data)
  }
  getLogin() {
    return http.get('/users/login')
  }
  logOut(id) {
    return http.get('/users/logout')
  }
}

export default new UsersDataService()