const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    oldPrice: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        default: 0,
        set: value => Math.round(value * 10 ) / 10,
    },
    category: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

const Listing = new mongoose.model('Listing', listingSchema);

module.exports = Listing;
