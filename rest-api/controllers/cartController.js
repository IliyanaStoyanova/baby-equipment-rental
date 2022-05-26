const { cartModel } = require('../models');

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

    cartModel.findOneAndUpdate({userId: userId}, {$addToSet: { products: product } }, {new: true, upsert: true} )
        .then(updateCart => {
            res.status(200).json(updateCart);
        })
        .catch(next);
}
 
function deleteProductCart(req, res, next) {
    const productId = req.params.productId;
    const { _id: userId } = req.user;

    cartModel.findOneAndUpdate({userId: userId}, {$pull: {"products": {"productId": productId}}}, {new: true, upsert: true})
        .populate('userId')
        .populate('products.productId')
        .then(deleteProductInCart => {
            res.status(200).json(deleteProductInCart);
        })
        .catch(next);
    // cartModel.findOneAndDelete({userId: userId, 'products.productId': "6253678bed575f64c9d5e827"})
    //     .then(deleteCart => {
    //         res.status(200).json(deleteCart);
    //     })
    //     .catch(next);
}

module.exports = {
    getCartUserInfo,
    addToCart,
    deleteProductCart
}
