import http from '../http-common'

class SubcategoriesDataService {

  getAll() {
    return http.get('/subcategories')
  }

  getByParentId(id) {
    return http.get(`/subcategories/category/${id}`)
  }

  create(data) {
    return http.post('/subcategories', data)
  }

}

export default new SubcategoriesDataService()