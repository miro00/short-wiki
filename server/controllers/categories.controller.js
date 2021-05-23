const Category = require("../models/categories.model");

module.exports = {
  index: (req, res) => {
    Category.get(req.db, (err, result) => {
      if (err) return console.error(err);
      let rs = result;
      Category.getSubCategories(req.db, (err, result) => {
        if (err) return console.error(err);
      
        result.forEach((subcat) => {
          rs.forEach((cat) => {
            let subcategory = {};
            let subcategories = [];
            if (subcat.category_parent === cat.id_category) {
              subcategory = {
                id_subcategory: subcat.id_category,
                subcategory_name: subcat.category_name,
                subcategory_url: subcat.category_url,
              };
              subcategories.push(subcategory);
              cat.subcategories = subcategories;
            } else {
            }
          });
        });
        res.send(rs);
      });
    });
  },

  getByUrl: (req, res) => {
    Category.getByUrl(req.db, req.body.url, (err, result) => {
      if (err) console.error(err)

      res.send(result)
    })
  },
};
