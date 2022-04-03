const getDB = require('../database').getDB;

async function getAllProducts(req, res) {
    const db = getDB();
    try {
        const products = await db.collection("products").find({}).toArray();
        res.status(200).json(products);
    }catch(e) {
        res.status(500);
    }
}

async function getProductById(req, res) {
    const db = getDB();
    const { productId } = req.params;
    try {
        const productById = await db.collection("products").find({
            id: productId
        }).toArray();
        res.status(200).json(productById);
    } catch(e) {
        res.status(500);
    }
}

module.exports = {
    getAllProducts,
    getProductById
}