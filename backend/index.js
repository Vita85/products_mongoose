const express = require("express");
const connectDB = require("./dbConnect");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const productController = require("./productController");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));


connectDB();

// GET all products
app.get("/products", productController.getAllProducts);

// GET product by ID
app.get("/products/:id", productController.getProductId);

// POST create new product
app.post("/products", productController.createProduct);

// DELETE product
app.delete("/products/:id", productController.deleteProduct);

//PUT update product
app.put("/products/:id", productController.updateProduct);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
