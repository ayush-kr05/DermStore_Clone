const express = require("express");
const User = require("../models/user.model");

const userRouter = express.Router();

userRouter.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // const cart = await User(req.body);
    // await cart.save();
    const user = await User.findById(userId);
    console.log(user);
    user.cartItems = [...user.cartItems, req.body];
    await user.save();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = userRouter;
