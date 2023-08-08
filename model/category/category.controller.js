const categorySevieces = require("./category.service");

module.exports.categoryData = async (req, res, next) => {
  const result = await categorySevieces.dataCategory(res);
};
