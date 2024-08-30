require("dotenv").config();
const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs");
  console.log("Database connected");
}


/* Middleware */
app.use(express.json()); // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
