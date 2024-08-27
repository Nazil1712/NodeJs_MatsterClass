const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const Allproducts = data.products

const createProduct = (req,res)=>{
    console.log(req.body)
    Allproducts.push(req.body)
    res.json(req.body)
}

const getAllProducts = (req,res)=>{
    res.json(Allproducts)
}

const getPrdouct = (req,res)=>{
    // console.log(req.params)
    const id = req.params.id;
    const product = Allproducts.find((v,i,arr)=>v.id == +id)
    res.json(product)
}

const replaceProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = Allproducts.findIndex((v,i,arr)=>v.id===id)
    Allproducts.splice(productIndex,1,{id:id,...req.body})
    res.json(Allproducts)
}

const updateProduct = (req,res)=>{
    const id = +req.params.id
    const productIndex = Allproducts.findIndex((p)=>p.id===id)
    const product = Allproducts[productIndex]
    Allproducts.splice(productIndex,1,{...product,...req.body})
    res.json({status:"successfull"})
}

const deleteProduct = (req,res)=>{
    const id = +req.params.id
    const productIndex = Allproducts.findIndex((p)=>p.id===id)
    Allproducts.splice(productIndex,1)
    res.json({status:"successfull"})
} 


module.exports = {createProduct,updateProduct,replaceProduct,deleteProduct,getPrdouct,getAllProducts}