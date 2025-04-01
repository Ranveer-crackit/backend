const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Number,
  discount: Number,
  offerPrice: Number,
  reviews: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
