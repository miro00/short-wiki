import http from '../http-common'

class CategoriesDataService {
  getAll() {
    return http.get('/categories')
  }

  getById(id) {
    return http.get(`/categories/${id}`)
  }
  
  getByUrl(url) {
    return http.get(`/categories/${url}`)
  }

  createCategory(data) {
    return http.post('/categories', data)
  }
}

export default new CategoriesDataService()