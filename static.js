const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send({"type":"GET"})
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})