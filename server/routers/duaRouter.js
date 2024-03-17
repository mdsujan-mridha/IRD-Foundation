// duaRouter.js

const express = require('express');
const { getAllDuas, getAllCategories, getAllSubcategories } = require('../controller/duaController');


const router = express.Router();
// get all duas 
router.route("/duas").get(getAllDuas);
// get all category 
router.route("/categories").get(getAllCategories);
// get all subcategory 
router.route('/subcategories').get(getAllSubcategories);

module.exports = router;
