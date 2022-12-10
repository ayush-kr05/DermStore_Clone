const mongoose = require("mongoose");
// products schema
const productSchema = new mongoose.Schema(
  {
    id: String,
    brand_logo_url: String,
    name: String,
    description: String,
    img_url_1: String,
    img_url_2: String,
    img_url_3: String,
    item_category: String,
    complexion_format: String,
    complexion_coverage: String,
    makeup_category: String,
    rating: Number,
    review_count: Number,
    mrp: Number,
    offer_price: Number,
    quantity: Number,
    item_in_cart: String,
    item_like: String,
    item_stock: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", productSchema, "products");
