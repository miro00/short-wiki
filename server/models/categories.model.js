module.exports = {
  get: (db, callback) => {
    db.query(`
      SELECT * FROM categories
      WHERE category_parent = 0
    `, callback)
  },

  getSubCategories: (db, callback) => {
    db.query(`
      SELECT * FROM categories
      WHERE category_parent <> ?
    `, '0', callback)
  },

  getById: (db, id, callback) => {
    db.query(`
      SELECT * FROM categories 
      WHERE id_category = ?
    `, id, callback)
  },

  getByUrl: (db, url, callback) => {
    db.query(`
      SELECT * FROM categories
      WHERE category_url = '?'
      AND category_parent = '0'
    `, url, callback)
  },

}