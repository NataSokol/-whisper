const ProductServices = require('../services/Product.services');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.status(200).json({ message: 'success', products });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductServices.getProductById(id);
    res.status(200).json({ message: 'success', product });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
