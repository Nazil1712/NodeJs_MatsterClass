const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
const Allproducts = data.products;
const { Product } = require("../model/product");

console.log("Model", Product);

const createProduct = async (req, res) => {
  // We can create new product in two ways

  // 1)
  /* const response = await Product.create(req.body)
  console.log(response) */

  // 2)
  try {
    const product = new Product(req.body);
    const response = await product.save();
    res.status(201).json(response);
  } catch (error) {
    // console.log(error);
    res.status(400).json({ message: error.message, details: error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const params_id = +req.params.id;
    const response = await Product.findOne({ id: { $eq: params_id } });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const replaceProduct = async (req, res) => {
  try {
    const params_id = +req.params.id;
    // const productIndex = Allproducts.findIndex((v, i, arr) => v.id === id);
    // Allproducts.splice(productIndex, 1, { id: id, ...req.body });
    const response = await Product.findOneAndReplace({id:params_id},{...req.body})
    console.log(response)
    res.status(200).json(response);
  } catch (error) { 
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const params_id = +req.params.id;

    // You can specify {new:true} in {options} If you want modified doc [[[Always REFER Documentation]]]
    const response = await Product.findOneAndUpdate({id:params_id},req.body,{new:true})
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try{
    const params_id = +req.params.id;
    // const productIndex = Allproducts.findIndex((p) => p.id === id);
    // Allproducts.splice(productIndex, 1);
    const response = await Product.findOneAndDelete({id:params_id})
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  replaceProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
