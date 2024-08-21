/* const {sum} = require('./lib')
const {diff} = require('./lib')
const lib = require('./lib')

// console.log(lib) // It represents export object
// console.log(sum(5,1)) */


/* import {sum} from "./lib"
import { diff } from "./lib"
console.log(sum(5,1))
console.log(diff(7,2)) */


const fs = require('fs')

console.log(performance.now())
/* const txt = fs.readFileSync('./content.txt','utf-8')
console.log(txt) */

fs.readFile('./content.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log(performance.now())
