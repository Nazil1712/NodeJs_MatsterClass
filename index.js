const http = require('http')
const fs = require('fs')


const index = fs.readFileSync('./index.html','utf-8')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const products = data.products

const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/product')) { 
        const id = req.url.split('/')[2];
        const product = products.find((v,i,arr)=>v.id==(+id))
        res.writeHead(200,{'Content-Type':'text/html'})
            let newIndex = index.replace('**title**',product.title)
            .replace('**price**',product.price)
            .replace('**rating**',product.rating)
            res.end(newIndex)
            return;
    }

    switch(req.url) {
        case '/':
            res.setHeader("Content-Type",'text/html');
            res.end(index)
            break;

        case '/api':
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(product))
            break;

        default:
            res.writeHead(404);
            res.end()
    }
})


server.listen(8080,()=>{
    console.log("Listening on port 8080")
})