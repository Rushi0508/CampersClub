const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    body: String,
    rating: Number,
    createdAt: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Review', reviewSchema);