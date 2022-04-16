const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
    userId: {     
        type: ObjectId,
        ref: "User"
    },
    products: [
        {
            productId: {
                type: ObjectId,
                ref: "Product"
            },
            rental_period: {
                start_period: {
                    type: String
                },
                end_period: {
                    type: String
                }
            }
        }       
    ]
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Cart', cartSchema);
