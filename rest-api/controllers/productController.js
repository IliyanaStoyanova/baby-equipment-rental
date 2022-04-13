const { productModel } = require('../models');

function getProducts(req, res, next) {
     productModel.find()
        .populate('categoryId')
        .then(products => {
            res.status(200).json(products)
        })
        .catch(next);
}
function getProductsById(req, res, next) {    
    const { productId } = req.params;
    productModel.findOne({id: productId})
        .populate('categoryId')
        .then(product => {
            res.json(product);
        })
        .catch(next);
}
module.exports = {
    getProducts,
    getProductsById
}
