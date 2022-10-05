const express = require("express");
const connection = require("./configs/db.js");
const app = express();
const cart = require('./controllers/cart.controller')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/cart', cart);

const port = 8080;
app.listen(port, async (req, res) => {
  try {
    await connection;
    console.log("connecting");
  } catch (error) {
    console.log(error.message);
  }
});
