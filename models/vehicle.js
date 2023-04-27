const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
company: {type:String, minlength:4,maxlength:25},
price: {type:Number, min:3,max:10000},
color: {type:String,minlength:2,maxlength:1000},
})
module.exports = mongoose.model("vehicle",vehicleSchema)