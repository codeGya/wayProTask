const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("product", "root", "Is1807", {
  host: "localhost",
  dialect: "mysql",
});
const Category = sequelize.define("category", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports.sequelize = sequelize;
module.exports.category = Category;
