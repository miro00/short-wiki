module.exports = class Model {
  constructor(db, id, data, callback) {
    this.db = db
    this.id = id
    this.data = data
    this.callback = callback
  }

  getAll(db, callback) {

  }

}
