const router = require('express').Router();
const users = require('./users');
const categories = require('./categories');
const products = require('./products');
const likes = require('./likes');
const test = require('./test');
const carts = require('./carts');
const { authController } = require('../controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/categories', categories);
router.use('/products', products);
router.use('/likes', likes);
router.use('/test', test);
router.use('/carts', carts);
module.exports = router;
