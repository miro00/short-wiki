import http from '../http-common'

class ArticlesDataService {
  getAll() {
    return http.get('/articles')
  }
  getByCatId(id) {
    return http.get(`/articles/${id}`)
  }
  create() {
    return http.post('/articles')
  }
}

export default new ArticlesDataService()