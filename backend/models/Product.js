const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [2, 'Title must be at least 2 characters long'],
    maxlength: [30, 'Title must be at most 30 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [2, 'Description must be at least 2 characters long'],
    maxlength: [200, 'Description must be at most 200 characters long'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Price must be at least 1'],
    max: [9999, 'Price must be at most 9999'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
