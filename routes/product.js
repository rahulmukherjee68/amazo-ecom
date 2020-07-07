var express = require('express');
var router = express.Router();
var productController = require('../controller/productController');

/* GET product listing. */
router.post('/add', async (req, res, next) => {
    await productController.addProduct(req, res);
});
// get all products
router.get('/getAll', async (req, res, next) => {
    await productController.getAllProduct(req, res);
});
// get by id requires query
router.get('/getByID/:id', async (req, res, next) => {
    await productController.getProductById(req, res);
});
// rate a product by id
router.put('/rateById', async (req, res, next) => {
    await productController.rateProduct(req, res);
});
// categories
router.get('/getByType/:prod_type', async (req, res, next) => {
    await productController.getProductByType(req, res);
});
//search
router.get('/search', async (req, res, next) => {
    await productController.searchProduct(req, res);
});

module.exports = router;