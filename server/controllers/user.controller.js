const express = require("express");
const User = require("../models/user.model");

const userRouter = express.Router();

// add to cart for users
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

// Trial but not workin on refresing all the data gone from cart page

// const express = require("express");
// const User = require("../models/user.model");
// const Product = require("../models/product.model");

// const userRouter = express.Router();

// userRouter.get("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     let user = await User.findById(userId);
//     res.send(user.cartItems);
//   } catch (error) {
//     res.status(403).send({ message: error.message });
//   }
// });

// userRouter.post("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     let user = await User.findById(userId);
//     const item = req.body;

//     let itemExist = user.cartItems.filter((itemb) => {
//       return itemb.id === item.id;
//     });
//     // console.log(itemExist);
//     if (itemExist.length > 0) {
//       return res.status(403).send({ message: "Item already in cart" });
//     }
//     user.cartItems = [...user.cartItems, item];
//     await user.save();

//     res.send(user);
//   } catch (error) {
//     res.status(403).send({ message: error.message });
//   }
// });

// userRouter.delete("/:userId/:prodId", async (req, res) => {
//   const { userId, prodId } = req.params;
//   try {
//     let user = await User.findById(userId);

//     let itemExist = user.cartItems.filter((itemb) => {
//       return itemb.id != prodId;
//     });

//     user.cartItems = itemExist;
//     await user.save();

//     res.send(user.cartItems);
//   } catch (error) {
//     res.status(403).send({ message: error.message });
//   }
// });

// userRouter.patch("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   const items = req.body;
//   try {
//     let user = await User.findById(userId);
//     user = [...user, ...items];
//     await user.save();
//     res.send(user.cartItems);
//   } catch (error) {
//     res.status(403).send({ message: error.message });
//   }
// });

// module.exports = userRouter;
