const express = require('express')
const app = express()
const {getPrdouct,getAllProducts,createProduct,
    updateProduct,replaceProduct,deleteProduct} = require('../controller/product')
const router = express.Router()


router
.get('/',getAllProducts)
.get('/:id',getPrdouct)
.post('/',createProduct)
.put('/:id',replaceProduct)
.patch('/:id',updateProduct)
.delete('/:id',deleteProduct)

module.exports = router