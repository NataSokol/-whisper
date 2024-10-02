const { Product } = require('../db/models');

class ProductServices {
  // получить все продукты
  static getAllProducts = async () => {
    const products = await Product.findAll();
    return products.map((product) => product.get());
  };

  // получить один продукт
  static getProductById = async (id) => {
    const product = await Product.findByPk(id);
    return product ? product.get() : null;
  };
}

module.exports = ProductServices;
