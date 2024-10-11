const {
  Cart,
  CartItem,
  Product,
  ProductSize,
  ColorProduct,
  Color,
  Image,
} = require("../../db/models");

class CartServices {
  static getCartByUserId = async (userId) => {
    try {
      const cart = await Cart.findOne({
        where: { userId },
        include: [
          {
            model: CartItem,
            include: [
              {
                model: Product,
                attributes: ["title", "description", "price", "salePrice"],
                include: { model: Image, attributes: ["url"] },
              },
              {
                model: ProductSize,
              },
            ],
          },
        ],
      });

      if (!cart) return null;

      const cartItemsWithColor = await Promise.all(
        cart.CartItems.map(async (item) => {
          const colorProduct = await ColorProduct.findOne({
            where: { id: item.productColorId },
            include: [
              {
                model: Color,
                attributes: ["title", "colorCode"],
              },
            ],
          });

          return {
            ...item.get({ plain: true }),
            colorProduct: colorProduct
              ? colorProduct.get({ plain: true })
              : null,
          };
        })
      );

      return {
        ...cart.get({ plain: true }),
        CartItems: cartItemsWithColor,
      };
    } catch (error) {
      console.log(error);
    }
  };
  static createCart = async (userId) => {
    let cart = await Cart.create({ userId, total: 0, salePrice: 0 });
    // cart = await Cart.findOne({  id: cart.id, where: { userId } })
    cart = await this.getCartByUserId(userId);
    return cart ? cart : null;
  };

  static updateCart = async (id, userId, total, salePrice) => {
    const cart = await Cart.findOne({ where: { id, userId } });
    if (cart) {
      await cart.update({ total, salePrice });
      return this.getCartByUserId(userId);
    }
    return null;
  };

  static deleteCart = async (id, userId) => {
    const cart = await Cart.findOne({ where: { id, userId } });
    if (cart) {
      return cart.destroy();
    }
    return "Cart not found";
  };
}

module.exports = CartServices;
