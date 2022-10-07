const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmEmail: { type: String, required: true },
    mobile: { type: Number, required: true },
    referralCode: { type: String },
    reward: { type: String },
    cartItems: [mongoose.Schema.Types.ObjectId],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
