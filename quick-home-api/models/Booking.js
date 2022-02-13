const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    houseId: { type: Number, required: true },
    sellerId: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);