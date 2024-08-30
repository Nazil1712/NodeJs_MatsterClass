const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  title: { type: String , required:true},
  description: { type: String },
  category: { type: String , required:true},
  price: { type: Number , min : [1,'Price should be greater than 0'], required:true},
  discountPercentage: { type: Number, min: [0,'Discount should be (>= 0)'], max:[50,'Wrong max discount']  },
  rating: { type: Number , min : [0,'Rating should be between 0-5'], max: [5, 'Rating should be between 0-5']},
  stock: Number,
  brand: { type: String , required:true},
  thumbnail: { type: String , required:true},
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
