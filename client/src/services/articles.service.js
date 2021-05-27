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
}

export default new ArticlesDataService()