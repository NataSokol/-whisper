const { Color, Product, ColorProduct } = require("../../db/models");

class ColorServices {
  static getAllColors = async () =>
    (await Color.findAll()).map((color) => color.get());

  static getOneColor = async (id) => {
    const color = await Color.findByPk(id, {
      include: {
        model: Product,
      },
    });
    if (color) {
      return color.get();
    }
    return null;
  };

  static createColor = async (title, colorCode, productId) => {
    const color = await Color.create({ title, colorCode });

    await ColorProduct.create({ colorId: color.id, productId });
    return color;
  };

  static updateColor = async (id, { title, colorCode }) => {
    const color = await Color.findByPk(id);
    if (color) {
      await color.update({ title, colorCode });
      return color.get();
    }
    return null;
  };
}

module.exports = ColorServices;
