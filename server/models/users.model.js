module.exports = {
  get: (db, callback) => {
    db.query(`
      SELECT * FROM users
    `, callback)
  },

  getById: (db, id, callback) => {
    db.query(`
      SELECT * FROM users
      WHERE id_user = ?
    `, id, callback)
  },
  
  login: (db, login, password, callback) => {
    db.query(`
      SELECT * FROM users
      WHERE user_login = ? AND user_password = ?
    `, [login, password], callback)
  },
}