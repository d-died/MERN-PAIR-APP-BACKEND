require("dotenv").config();
const mongoose = require('mongoose')
const db = mongoose.connection;
// Mongo URL and Connection 
const mongoURI = process.env.DATABASE_URL


// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true })

// Connection error/success  / 
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected at: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Open the Connection
db.on("open", () => {
  console.log("✅ mongo connection made!");
});

module.exports = mongoose