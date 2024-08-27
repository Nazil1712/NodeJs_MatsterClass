const express = require("express")
const app = express()
const {getPrdouct,getAllProducts,createProduct,
    updateProduct,replaceProduct,deleteProduct} = require('./controller/product')


/* Middleware */
app.use(express.json()) // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form

app
.get('/products',getAllProducts)
.get('/products/:id',getPrdouct)
.post('/products',createProduct)
.put('/products/:id',replaceProduct)
.patch('/products/:id',updateProduct)
.delete('/products/:id',deleteProduct)


app.listen(8080,()=>{
    console.log("Listening on port 8080")
})