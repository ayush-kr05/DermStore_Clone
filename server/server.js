const express = require("express");
const connection = require("./configs/db.js");
const app = express();
const cors = require("cors");
const authRouter = require("./middlewares/auth");
const userRouter = require("./controllers/user.controller");
const productRouter = require("./controllers/product.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/cart", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 8080;
app.listen(port, async (req, res) => {
  try {
    await connection;
    console.log("connecting");
  } catch (error) {
    console.log(error.message);
  }
});
