const fs = require('fs')
const express = require("express")
const app = express()
const morgan = require('morgan')

const index = fs.readFileSync('./index.html')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const Allproducts = data.products


// Middleware
app.use((req,res,next)=>{
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'))
    next()
})

app.use(express.json()) // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form
app.use(morgan('dev'))

const Queryauth = (req,res,next) =>{
    console.log(req.query)

    if(req.query.password=='123') {
        next()
    }
    else{
        res.sendStatus(401)
    }
}

const Bodyauth = (req,res,next) =>{
    console.log(req.body)
    if(req.body.password=='123') {
        next()
    }
    else{
        res.sendStatus(401)
    }
}

app.get('/auth',Queryauth,(req,res)=>{
    res.send(`<h1>Logged In!</h1>`)
})

app.post('/auth',Bodyauth,(req,res)=>{
    res.send(`<h1>Auhtorized Successfull</h1>`)
})



// API /OR/ EndPoints /OR/ Routes
app.get('/',(req,res)=>{
    res.json({type:"GET"})
})
app.post('/',(req,res)=>{
    res.json({type:"post"})
})
app.patch('/',(req,res)=>{
    res.json({type:"patch"})
})
app.delete('/',(req,res)=>{
    res.json({type:"delete"})
})
app.put('/',(req,res)=>{
    res.json({type:"put"})
})


app.get('/express',(req,res)=>{
    // res.json(Allproducts)
    // res.send(`<h1>Hello Nazil</h1>`)
    // res.sendFile('D:/Nazil/1 A CHARUSAT/1 Visual Studio Code/Personal/Practice/20_NodeJs_MasterClass/NodeJs_MatsterClass/index.html')
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})