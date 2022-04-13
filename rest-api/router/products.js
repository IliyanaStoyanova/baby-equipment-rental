const express = require('express');
const router = express.Router();
// const { auth } = require('../utils');
const { productController } = require('../controllers');

// middleware that is specific to this router

router.get('/', productController.getProducts);
router.get('/:productId', productController.getProductsById);

module.exports = router