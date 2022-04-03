const getDB = require('../database').getDB;

async function getAllCategories(req, res) {
    const db = getDB();
    try {
        const categories = await db.collection("categories").find({}).toArray();
        res.status(200).json(categories);
    }catch(e) {
        res.status(500);
    }
}

async function getCategoryById(req, res) {
    const db = getDB();
    const { categoryId } = req.params;
    try {
        const categoryById = await db.collection("categories").find({
            id: categoryId
        }).toArray();
        res.status(200).json(categoryById);
    } catch(e) {
        res.status(500);
    }
}

module.exports = {
    getAllCategories,
    getCategoryById
}