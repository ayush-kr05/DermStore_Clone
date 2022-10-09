const express = require("express");
const User = require("../models/user.model");

const authRouter = express.Router();

authRouter.post("/signUp", async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await User.exists({ email: email });
    if (userExist) {
      return res.status(201).send({ message: "User already exists" });
    }
    const user = User(req.body);
    user.save();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(200).send({ message: "User not found" });
    } else if (user.password !== password) {
      // console.log(user.password, password);
      return res.status(200).send({ message: "Wrong Password" });
    } else {
      return res.send({ message: "Login Success", token: user._id });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = authRouter;
