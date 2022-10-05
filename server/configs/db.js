const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/dermstore");

module.exports = connection;
