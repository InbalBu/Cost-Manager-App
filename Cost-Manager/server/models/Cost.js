const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    sum: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    category: {
        type: String,
        required: true,
    },
  },
  { timestamps: true },
  { collection: 'Cost'}
);

module.exports = mongoose.model("Cost", CostSchema);