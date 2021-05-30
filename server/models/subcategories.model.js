module.exports =  {

  getAll: (db, callback) => {
    db.query(`
      SELECT * FROM subcategories
    `, callback)
  },

  create: (db, data, callback) => {
    db.query(`
      INSERT INTO subcategories SET
        subcategory_name = ?,
        subcategory_url = ?,
        subcategory_parent = ?
    `, [data.name, data.url, data.parent], callback)
  },

  getById: (db, id, callback) => {
    db.query(`
      SELECT * FROM subcategories
      WHERE id_subcategory = ?
    `, [id], callback)
  },

  getByParentId: (db, id, callback) => {
    db.query(`
      SELECT * FROM subcategories
      WHERE subcategory_parent = ?
    `, [id], callback)
  },

  update: (db, id, data, callback) => {
    db.query(`
      UPDATE subcategories SET
        subcategory_name = ?,
        subcategory_url = ?,
        subcategory_parent = ?
      WHERE id_subcategory = ?
    `, [data.name, data.url, data.parent, id], callback)
  },

  delete: (db, id, callback) => {
    db.query(`
      DELETE FROM subcategories
      WHERE id_subcategory = ?
    `, [id], callback)
  },

}
