const Category = require("../MODELS/connection.js").category;

module.exports.createCategory = async (req, res, next) => {
  let { categoryToCreate, productToCreate, statusAt } = req.body;

  await Category.create({
    category: categoryToCreate,
    product: productToCreate,
    status: statusAt,
  });
  res.status(200).send("Category and Product Successfully Created");
};

module.exports.getCategory = async (req, res, next) => {
  let categoryToSearch = req.query.category;

  const categoryFromDatabases = await Category.findAll({
    where: { category: categoryToSearch },
  });
  res.status(200).send(categoryFromDatabases);
};
module.exports.updateCategory = async (req, res, next) => {
  let { categoryToSearch, productToSearch } = req.body;

  await Category.update(
    { category: categoryToSearch },
    { where: { product: productToSearch } }
  );
  res.status(200).send("Category updated successfully");
};

module.exports.deleteCategory = async (req, res, next) => {
  let productToDelete = req.query.product;
  const productExistInDatabaseOrNot = await Category.findAll({
    where: { product: productToDelete },
  });
  if (productExistInDatabaseOrNot.length === 0) {
    res.status(400).send("No such product exist in Database");
  }

  await Category.destroy({ where: { product: productToDelete } });
  res.status(200).send("Product Deleted successfully from Database");
};
module.exports.buyProduct = async (req, res, next) => {
  let { productToPurchase } = req.body;

  const particularProductInDatabase = await Category.findAll({
    where: { product: productToPurchase },
  });
  if (particularProductInDatabase.length === 0) {
    res.status(400).send("No such product exit in Database");
  }
  await Category.update(
    { status: 1 },
    { where: { product: productToPurchase } }
  );
  res.status(200).send("Product purchased successfully");
};
