const mongoose = require("./connection")
const Activity = require("../models/activity")
const activitySeeds = require("./seeds.json")


Activity.insertMany(activitySeeds)
    .then(console.log)