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
  createCategory(data) {
    return http.post('/categories', data)
  }
  createSubcategory(data) {
    return http.post('/categories/subcategories', data)
  }
}

export default new CategoriesDataService()