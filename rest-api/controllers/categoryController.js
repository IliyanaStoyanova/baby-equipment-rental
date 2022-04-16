const { categoryModel, productModel } = require('../models');

function getCategories(req, res, next) {
   categoryModel.find()
        .populate('products')
        .then(categories => {
            res.json(categories)
        })
        .catch(next);
}

function getCategory(req, res, next) {
    const { categoryId } = req.params;
    
    categoryModel.findOne({id: categoryId})
        .populate('products')
        .then(category => {
            res.json(category)
        })
        .catch(next);
}

function getCategorySorter(req, res, next) {
    const { categoryId, sorter } = req.params;
    categoryModel.findOne({id: categoryId})
        .populate({path: 'products', options: {sort: {[sorter]: 1}}}) 
        .then(category => {
            res.json(category);
        })
        .catch(next);
}
module.exports = {
    getCategory,
    getCategories,
    getCategorySorter
}
