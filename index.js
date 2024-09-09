require("dotenv").config();
const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs");
  console.log("Database connected");
}

/* Middleware */
const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    console.log("Header", token);
    console.log("Secret_key", process.env.SECRET_KEY);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log("Decoded", decoded);
    if (decoded.email) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
}

app.use(express.json()); // ==> Used to parse JSON data from body
// app.use(express.urlencoded()) ==> Used when we are dealing with form
app.use("/products",auth, productRouter);
app.use("/users",auth, userRouter);
app.use("/auth",authRouter)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
