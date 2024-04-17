const mongoose = require("mongoose");

const toysSchema = mongoose.Schema({
  toys_type: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  toys_size: String,
  toys_price: {
    type: Number,
    min: 1, // Minimum value allowed
    max: 1000 // Maximum value allowed
  }
});

module.exports = mongoose.model("toys", toysSchema);
