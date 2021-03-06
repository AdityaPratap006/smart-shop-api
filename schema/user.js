const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: "user" },
    userid: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    profilePicUrl: { type: String, default: "https://image.flaticon.com/icons/svg/145/145848.svg" },
    products: [{
        _id: String,
        name: String,
        brand: String,
        price: Number,
        image: String,
        cartQuantity: { type: Number, default: 0 },
        orderedAt: { type: Date, default: Date.now }
    }, { $sort: { orderedAt: -1 } }],
    cart: [{
        _id: String,
        name: String,
        brand: String,
        price: Number,
        image: String,
        cartQuantity: { type: Number, default: 0 }
    }]
});

module.exports = {
    userSchema: userSchema,
}