import http from '../http-common'

class CategoriesDataService {
  getAll() {
    return http.get('/categories')
  }
  getSubCategories() {
    return http.get('/categories/subcategories')
  }
  get(id) {
    return http.get(`/categories/${id}`)
  }
  getByUrl(url) {
    return http.get(`/categories/${url}`)
  }
  getByParent(id) {
    return http.get(`/categories/${id}/subcategories`)
  }
}

export default new CategoriesDataService()