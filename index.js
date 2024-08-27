const fs = require('fs')
const express = require("express")
const app = express()
const morgan = require('morgan')


const index = fs.readFileSync('./index.html')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const Allproducts = data.products


/* Middleware */
app.use(express.json()) // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form



/* REST APIs */

// READ API => GET
app.get('/products',(req,res)=>{
    res.json(Allproducts)
})

app.get('/products/:id',(req,res)=>{
    // console.log(req.params)
    const id = req.params.id;
    const product = Allproducts.find((v,i,arr)=>v.id == +id)
    res.json(product)
})


// Create API => POST
app.post('/products',(req,res)=>{
    console.log(req.body)
    Allproducts.push(req.body)
    res.json(req.body)
})


/* Update API => PUT */
app.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = Allproducts.findIndex((v,i,arr)=>v.id===id)
    Allproducts.splice(productIndex,1,{id:id,...req.body})
    res.json(Allproducts)
})


/* Update API => PATCH */
app.patch('/products/:id',(req,res)=>{
    const id = +req.params.id
    const productIndex = Allproducts.findIndex((p)=>p.id===id)
    const product = Allproducts[productIndex]
    Allproducts.splice(productIndex,1,{...product,...req.body})
    res.json({status:"successfull"})
})


/* Delete API => DELETE */
app.delete('/products/:id',(req,res)=>{
    const id = +req.params.id
    const productIndex = Allproducts.findIndex((p)=>p.id===id)
    Allproducts.splice(productIndex,1)
    res.json({status:"successfull"})
})




app.listen(8080,()=>{
    console.log("Listening on port 8080")
})