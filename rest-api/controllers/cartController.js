const { cartModel } = require('../models');

const utils = require('../utils');
const { authCookieName } = require('../app-config');
const { ObjectId } = require('mongoose');

function getCartUserInfo(req, res, next) {
    const { _id: userId } = req.user;
    cartModel.findOne({ userId: userId }, { password: 0, __v: 0 })
        .populate('userId')
        .populate('products.productId')
        .then(cart => { 
            res.status(200).json(cart) })
        .catch(next);
}

function addToCart(req, res, next) {
    const { product } = req.body;
    const { _id: userId} = req.user;
    cartModel.updateOne({userId: userId}, {$addToSet: { products: product } } )
        .then(updateCart => {
            res.json(updateCart)})
        .catch(next);
}
 
module.exports = {
    getCartUserInfo,
    addToCart
}
