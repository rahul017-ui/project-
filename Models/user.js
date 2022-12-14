const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, index: { unique: true, required: true } },
    password: { type: String, required: true },
    profilePhoto: {type:String}

  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Users", userSchema);
