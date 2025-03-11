const mongoose = require("mongoose");
const masterSchema =require("./masterModel");

const reviewSchema = new mongoose.Schema({
    ...masterSchema.obj,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
});    

module.exports = mongoose.model("Review", reviewSchema);
