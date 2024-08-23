const http = require('http')
const fs = require('fs')


const index = fs.readFileSync('./index.html','utf-8')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const product = data.products[0]

const server = http.createServer((req,res)=>{
    switch(req.url) {
        case '/':
            res.setHeader("Content-Type",'text/html');
            res.end(index)
            break;

        case '/api':
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(data))
            break;

        default:
            res.writeHead(404);
            res.end()
    }
})


server.listen(8080,()=>{
    console.log("Listening on port 8080")
})