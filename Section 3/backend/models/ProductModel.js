const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: String,
    price: Number,
    brand: { type: String },
    image: { type: String },
    category: { type: String, default: 'unspecified' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('products', mySchema);