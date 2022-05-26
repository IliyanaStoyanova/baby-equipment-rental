const express = require('express');
const router = express.Router();
const { cartController } = require('../controllers');
const { auth } = require('../utils');

router.get('/', auth(), cartController.getCartUserInfo);
router.post('/', auth(), cartController.addToCart);
router.delete('/:productId', auth(), cartController.deleteProductCart);
module.exports = router