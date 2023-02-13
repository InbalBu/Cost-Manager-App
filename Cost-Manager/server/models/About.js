const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
  },
);

module.exports = mongoose.model("About", AboutSchema);