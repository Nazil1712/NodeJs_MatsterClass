const express = require('express')
const app = express()
const {getProduct,getAllProducts,createProduct,
    updateProduct,replaceProduct,deleteProduct} = require('../controller/product')
const router = express.Router()


router
.get('/',getAllProducts)
.get('/:id',getProduct)
.post('/',createProduct)
.put('/:id',replaceProduct)
.patch('/:id',updateProduct)
.delete('/:id',deleteProduct)

module.exports = router