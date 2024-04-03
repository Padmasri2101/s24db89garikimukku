const mongoose = require("mongoose")
const toysSchema = mongoose.Schema({
toys_type: String,
toys_size: String,
toys_price: Number
})
module.exports = mongoose.model("toys",
toysSchema)