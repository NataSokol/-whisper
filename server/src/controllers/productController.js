const ProductServices = require("../services/Product.services");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.status(200).json({ message: "success", products });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductServices.getProductById(id);
    res.status(200).json({ message: "success", product });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { title, price, salePrice, description, composition } = req.body;

    const product = await ProductServices.createProduct(
      title,
      price,
      salePrice,
      description,
      composition
    );
    if (product) {
      res.status(201).json({ message: "success", product });
      return;
    }
    res.status(404).json({ message: "There was an error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    const product = await ProductServices.updateProduct(id, productData, {
      new: true,
    });
    
    res.status(200).json({ message: "success", product });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductServices.getProductById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    await ProductServices.deleteProduct(id);
    res.status(200).json({ message: "success" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
