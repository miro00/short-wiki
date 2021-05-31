import http from '../http-common'

class ArticlesDataService {
  getAll() {
    return http.get('/articles')
  }
  getByCatId(id) {
    return http.get(`/articles/${id}`)
  }
  create(data) {
    return http.post('/articles', data)
  }
  update(id, data) {
    return http.put(`/articles/${id}`, data)
  }
}

export default new ArticlesDataService()