const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json','utf8'))
const Allusers = data.users

const createUser = (req,res)=>{
    console.log(req.body)
    Allusers.push(req.body)
    res.json(req.body)
}

const getAllUsers = (req,res)=>{
    res.json(Allusers)
}

const getUser = (req,res)=>{
    // console.log(req.params)
    const id = req.params.id;
    const user = Allusers.find((v,i,arr)=>v.id == +id)
    res.json(user)
}

const replaceUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = Allusers.findIndex((v,i,arr)=>v.id===id)
    Allusers.splice(userIndex,1,{id:id,...req.body})
    res.json(Allusers)
}

const updateUser = (req,res)=>{
    const id = +req.params.id
    const userIndex = Allusers.findIndex((p)=>p.id===id)
    const user = Allusers[userIndex]
    Allusers.splice(userIndex,1,{...user,...req.body})
    res.json({status:"successfull"})
}

const deleteUser = (req,res)=>{
    const id = +req.params.id
    const userIndex = Allusers.findIndex((p)=>p.id===id)
    Allusers.splice(userIndex,1)
    res.json({status:"successfull"})
} 


module.exports = {createUser,updateUser,replaceUser,deleteUser,getUser,getAllUsers}