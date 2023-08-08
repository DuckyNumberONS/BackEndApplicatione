const express = require("express");
const router = express.Router();
const categoryController = require("../model/category/category.controller");

router.get("/getCategory", categoryController.categoryData);

module.exports = router;
