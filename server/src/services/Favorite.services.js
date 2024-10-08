const { Favorite, Product } = require("../../db/models");

class FavoriteServices {
  static async getFavorites(userId) {
    const favorites = await Favorite.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          as: "Product",
          attributes: [
            "id",
            "title",
            "price",
            "salePrice",
            "description",
            "composition",
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return favorites;
  }

  static async getOneFavorite(userId, productId) {
    return await Favorite.findOne({
      where: { userId, productId },
      include: [
        {
          model: Product,
          as: "Product",
          attributes: [
            "id",
            "title",
            "price",
            "salePrice",
            "description",
            "composition",
          ],
        },
      ],
    });
  }

  static createFavorite = async ({ userId, productId }) => {
    const favoriteIn = await this.getOneFavorite(userId, productId);
    if (favoriteIn) {
      return "favorite already";
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return "Product not found";
    }
    const favorite = await Favorite.create({ userId, productId });
    return favorite.get();
  };

  static deleteFavorite = async (userId, productId) => {
    const favoriteIn = await this.getOneFavorite(userId, productId);
    if (favoriteIn) {
      await Favorite.destroy({ where: { userId, productId } });
      return "favorite delete";
    }

    return "favorite no";
  };
}

module.exports = FavoriteServices;
