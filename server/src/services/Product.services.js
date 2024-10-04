const { Product, Collection, Category, Subcategory } = require('../../db/models');

class ProductServices {
  // получить все продукты
  static getAllProducts = async () => {
    const products = await Product.findAll({include: [
      { model: Collection }, 
      { model: Category }, 
      { model: Subcategory }
    ] });
    return products.map((product) => product.get());
  };

  // получить один продукт
  static getProductById = async (id) => {
    const product = await Product.findByPk(id, {include: [
      { model: Collection }, 
      { model: Category }, 
      { model: Subcategory }
    ]});
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
