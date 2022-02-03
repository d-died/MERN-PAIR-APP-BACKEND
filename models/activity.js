const mongoose = require("../db/connection")

const ActivitySchema = new mongoose.Schema({
    activity: String,
    type: String, 
    participants: Number,
    price: Number,
    key: String
})

const Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity