const express = require("express");
const router = express.Router();
const createCategory = require("../CONTROLLER/controller.js").createCategory;
const getCategory = require("../CONTROLLER/controller.js").getCategory;
const updateCategory = require("../CONTROLLER/controller.js").updateCategory;
const deleteCategory = require("../CONTROLLER/controller.js").deleteCategory;
const buyProduct = require("../CONTROLLER/controller.js").buyProduct;

router.post("/create/category", createCategory);
router.get("/get/category", getCategory);
router.post("/update/category", updateCategory);
router.delete("/delete/category", deleteCategory);
router.post("/buy/product", buyProduct);

module.exports.router = router;
