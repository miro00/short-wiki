module.exports = {
  get: (db, callback) => {
    db.query(`
      SELECT * FROM categories
    `, callback)
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
      WHERE category_url = ?
      AND category_parent = 0
    `, url, callback)
  },

  create: (db, data, callback) => {
    db.query(`
      INSERT INTO categories SET
      category_name = ?,
      category_url = ?,
      category_parent = 0
    `, [data.category_name, data.category_url], callback)
  },

  getArticles: (db, id, callback) => {
    db.query(`
      SELECT *, subcategories.subcategory_parent 
      FROM articles
      LEFT JOIN subcategories ON subcategories.id_subcategory = article_category
      WHERE subcategories.subcategory_parent = ?
    `, id, callback)
  }

}
