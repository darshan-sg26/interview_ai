const express = require("express")

const app =express()

app.use(express.json())

/* require all the routes here */
const authRouter = require("./routes/auth.routes")

/*using all the routes here*/
app.use("/api/auth", authRouter)    //prefix to access API

module.exports  = app