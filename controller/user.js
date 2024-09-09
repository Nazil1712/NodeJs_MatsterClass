const fs = require("fs");
const { User } = require("../model/user");


const getAllUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const params_id = +req.params.id;
    const response = await User.findOne({ id: { $eq: params_id } });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const replaceUser = async (req, res) => {
  try {
    const params_id = +req.params.id;
    // const userIndex = Allusers.findIndex((v, i, arr) => v.id === id);
    // Allusers.splice(userIndex, 1, { id: id, ...req.body });
    const response = await User.findOneAndReplace({id:params_id},{...req.body})
    console.log(response)
    res.status(200).json(response);
  } catch (error) { 
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const params_id = +req.params.id;

    // You can specify {new:true} in {options} If you want modified doc [[[Always REFER Documentation]]]
    const response = await User.findOneAndUpdate({id:params_id},req.body,{new:true})
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUser = async (req, res) => {
  try{
    const params_id = +req.params.id;
    // const userIndex = Allusers.findIndex((p) => p.id === id);
    // Allusers.splice(userIndex, 1);
    const response = await User.findOneAndDelete({id:params_id})
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  updateUser,
  replaceUser,
  deleteUser,
  getUser,
  getAllUsers,
};
