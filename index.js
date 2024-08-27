const express = require("express")
const app = express()
const productRouter = require('./routes/product')


/* Middleware */
app.use(express.json()) // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form
app.use('/products',productRouter)


app.listen(8080,()=>{
    console.log("Listening on port 8080")
})