const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Registration" },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("comment", commentSchema);
