const { User } = require("../model/user");
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    try {
    const user = new User(req.body);
    const token = jwt.sign({email : req.body.email},process.env.SECRET_KEY)
    user.token = token;
    const response = await user.save();
    res.status(201).json(response);
  } catch (error) {
    // console.log(error);
    res.status(400).json({ message: error.message, details: error });
  }
};


module.exports  ={
    createUser
}