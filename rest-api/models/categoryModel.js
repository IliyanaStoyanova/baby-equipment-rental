const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    products: [{
        type: ObjectId,
        ref: "Product"
    }],
    image: {
        alt: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    parent_category_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema);
