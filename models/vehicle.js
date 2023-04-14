const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
company: String,
price: Number,
color: String
})
module.exports = mongoose.model("vehicle",vehicleSchema)