const mongoose = require("../db/connection")

const ActivitySchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true
    }
    // type: {
    //     type: String,
    //     required: false 
    // participants: Number,
    // price: Number,
    // key: String
})

const Activity = mongoose.model("Activity", ActivitySchema)

module.exports = Activity