const express = require('express')
const app = express()
const {getUser,getAllUsers,createUser,
    updateUser,replaceUser,deleteUser} = require('../controller/user')
const router = express.Router()


router
.get('/',getAllUsers)
.get('/:id',getUser)
.post('/',createUser)
.put('/:id',replaceUser)
.patch('/:id',updateUser)
.delete('/:id',deleteUser)

module.exports = router