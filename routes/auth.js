const express = require('express')
const app = express()
const {createUser} = require('../controller/auth')
const router = express.Router()


router
.post('/signUp',createUser)

module.exports = router