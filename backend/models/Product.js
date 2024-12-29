const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [2, 'Min 2 characters'],
    maxlength: [30, 'Max 30 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [2, 'Min 2 characters'],
    maxlength: [200, 'Max 200 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [1, 'Min 1 character'],
    max: [9999, 'Max 9999 characters'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
