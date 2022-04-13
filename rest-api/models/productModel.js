const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: "Category"
    },
    description: {
        type: String,
        required: true
    },
    features: [{
        descript: String
    }],
    technical: {
        weight:  {
            type: Number,
            required: true
        },
        weight_unit:  {
            type: String,
            required: true
        },
        dimensions: {
            length:  {
                type: Number,
                required: true
            },
            weight:  {
                type: Number,
                required: true
            },
            height:  {
                type: Number,
                required: true
            }
        },
        dimensions_unit:  {
            type: String,
            required: true
        },
        folded: {
            length:  {
                type: Number,
                required: true
            },
            weight:  {
                type: Number,
                required: true
            },
            height:  {
                type: Number,
                required: true
            }
        },
        folded_unit:  {
            type: String,
            required: true
        }
    },
    price:  {
        type: Number,
        required: true
    },
    currency:  {
        type: String,
        required: true
    },
    accessories: [{
        name:  {
            type: String,
            required: true
        },
        price:  {
            type: Number,
            required: true
        }
    }],
    rental_period: [{
        start_period:  {
            type: String,
            required: true
        },
        end_period:  {
            type: String,
            required: true
        }
    }],
    deposit:  {
        type: Number,
        required: true
    },
    images: [{
        alt:  {
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
    }]
});

module.exports = mongoose.model('Product', productSchema);
