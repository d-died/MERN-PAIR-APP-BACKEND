const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors");
app.use(cors());
require("./db/connection")
app.set("port", 3001)


//START MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//this passes the data we send into a workable format that we can use
//this takes the url encoded data and passes it into an object, that we canse 
//this allows us to access req.body 



//ROUTES
app.get("/", (req, res) => {
    res.redirect("/activity")
})

app.get("/home", (req, res) => {
    res.json({
        activity: "Bing bong",
        participants: 8,
    })
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"})
})

//CONTROLLERS
const activitiesController = require("./controllers/activitiesController")
app.use("/activity", activitiesController) //this is home route for the activitiesController

//END CONTROLLERS
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).send(message)
})

//START THE SERVER
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")} YUP`)
})


