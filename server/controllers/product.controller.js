const express = require("express");
const Product = require("../models/product.model.js");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.send({ message: error.message });
  }
});

productRouter.get("/:prodId", async (req, res) => {
  const id = req.params.prodId;
  try {
    const products = await Product.findById(id);
    res.send(products);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = productRouter;
