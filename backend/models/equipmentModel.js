const { Schema, model } = require('../connection');
const myschema = new Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    features: {type : Array, default: []},
    images: {type : Array, default: []},
    createdAt: Date
});

module.exports = model('equipment', myschema)