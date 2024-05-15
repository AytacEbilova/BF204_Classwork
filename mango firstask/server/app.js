const express = require("express");
let dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Schema } = mongoose;
const app = express();
const PORT = process.env.PORT || 3000;
const DB = process.env.DB_URL;

app.use(cors());

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected succesfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port:http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);
//getAll
app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "empty data", data: products });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.use(bodyParser.json())
//getOne
app.get("/products/:id/", async (req, res) => {
  const { id } = req.params;
  try {
    let product = await Products.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.send({
        message: "empty data",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: "success", error: true });
  }
});

//delete
app.delete("/products/:id/", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Products.findByIdAndDelete(id);
    const products = await Products.find({});
    res.send({
      message: "deleted",
      deletedProduct: deletedProduct,
      allUsers: products,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      error: true,
    });
  }
});

app.post("/products", async (req, res) => {
  const newProduct = new Products(req.body);
  console.log(req.body)
  await newProduct.save();
  res.send({
    message: "posted",
    data: newProduct,
  });
});


