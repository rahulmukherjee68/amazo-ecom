const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
      prod_name: { type: String, required: true },
      prod_type: { type: String, required: true },
      prod_price: { type: Number, required: true },
      prod_rating:{ type: Number, required: false,default:0 },
      prod_details:{ type: String, required: true },
    },
    { timestamps: true }
  );

  module.exports = Product = mongoose.model("Products", ProductSchema);