const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Registration" },
    videoUrl: { type: String },
    title: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("video", videoSchema);
