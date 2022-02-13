const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema(
    {
        houseId: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        sellerId: { type: String, required: true, unique: true }
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("House", HouseSchema);