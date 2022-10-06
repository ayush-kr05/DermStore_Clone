const express = require("express");
const User = require("../models/user.model");

const authRouter = express.Router();

authRouter.post("/signUp", async (req, res) => {
  const { email } = req.body;

  try {
    const userExist = await User.exists({ email: email });
    if (userExist) {
      return res.status(403).send({ message: "User already exists" });
    }
    const user = User(req.body);
    user.save();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.find({ email, password });
    if (user.length > 0) {
      return res.send({ message: "Login Success", token: 123456, user });
    } else {
      return res.send("User not found");
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = authRouter;
