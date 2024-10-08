const { ProductSize } = require("../../db/models");

class ProductSizeServices {
  static getAllProductSizes = async () =>
    (await ProductSize.findAll()).map((productSize) => productSize.get());

  static getOneProductSize = async (id) => {
    const productSize = await ProductSize.findByPk(id);
    return productSize ? productSize.get() : null;
  };

  static createProductSize = async (data) => {
    const productSize = await ProductSize.create(data);
    return productSize.get();
  };

  static updateProductSize = async (id, data) => {
    const productSize = await ProductSize.findByPk(id);
    if (productSize) {
      await productSize.update(data);
      return productSize.get();
    }
    return null;
  };

  static deleteProductSize = async (id) => {
    const productSize = await ProductSize.findByPk(id);
    if (productSize) {
      return productSize.destroy();
    }
    return "Product size not found";
  };
}

module.exports = ProductSizeServices;
