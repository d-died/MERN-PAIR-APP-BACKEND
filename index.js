const express = require("express")
const app = express()
require("./db/connection")
app.set("port", 8080)


//START MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//ROUTES
app.get("/", (req, res) => {
    res.redirect("/")
})

//CONTROLLERS


app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).send(message)
})

//START THE SERVER
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")} YUP`)
})