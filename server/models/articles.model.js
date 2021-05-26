module.exports = {
  get: (db, callback) => {
    db.query(`
      SELECT * FROM articles
    `, callback)
  },

  getByCatId: (db, id, callback) => {
    db.query(`
      SELECT * FROM articles
      WHERE article_category = ?
    `, id, callback)
  },
  create: (db, data, callback) => {
    db.query(`
      INSERT INTO articles SET
      article_title = '${data.article_title}',
      article_url = '${data.article_url}',
      article_content = '${data.article_content}',
      article_author = '${data.article_author}',
      article_category = '${data.article_category}'
    `, callback)
  },
}