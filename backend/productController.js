const Product = require('./models/Product');
const {validationSchema} = require("./validationSchemaBack")

// GET ALL
const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error. Error fetching', error });
  }
};

// GET BY ID
const getProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error. Error fetching product.', error });
  }
};

// POST
const createProduct = async (req, res) => {
  const { error, value } = validationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Invalid data', details: error.details });
  }

  try {
    const newProduct = new Product(value);  
    await newProduct.save();
    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error. Error adding product.', error });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const resultDelete = await Product.deleteOne({ _id: id }); 
    if (resultDelete.deletedCount > 0) {
      res.json({ message: 'Product deleted.' });
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error. Error deleting product.', error });
  }
};

// PUT
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productUpdate = req.body;

  try {
    const product = await Product.findById(id); 
    if (!product) {
      return res.status(404).json({ message: 'Product not found.' });
    }
    if (
      product.title === productUpdate.title &&
      product.description === productUpdate.description &&
      product.price === productUpdate.price
    ) {
      return res.status(200).json({ message: 'No changes to update.' });
    }
    await Product.findByIdAndUpdate(id, productUpdate, { new: true });
    res.json({ message: 'Product updated.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error. Error updating product.', error });
  }
};

module.exports = {
  getAllProducts,
  getProductId,
  createProduct,
  deleteProduct,
  updateProduct
};