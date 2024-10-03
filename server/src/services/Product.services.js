const { Product } = require('../../db/models');

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

  // АДМИНКА
  // создать продукт
  static createProduct = async (
    title,
    price,
    salePrice,
    description,
    composition
  ) => {
    const product = await Product.create({
      title,
      price,
      salePrice,
      description,
      composition,
    });
    return product.get();
  };

  // обновить продукт
  static updateProduct = async (
    id,
    { title, price, salePrice, description, composition }
  ) => {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update({
        title,
        price,
        salePrice,
        description,
        composition,
      });
      return product.get();
    }
    return null;
  };

  // удалить продукт
  static deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (product) {
      return product.destroy();
    }
    return 'Product not found';
  };
}

module.exports = ProductServices;
