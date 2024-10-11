const {
  CartItem,
  Product,
  ProductSize,
  Color,
  ColorProduct,
} = require("../../db/models");



//! написать ручку для чтения элемента корзины как ручку для самой корзины, через костыль, в таком варианте будет только один элемент в корзине крашится

class CartItemService {
  static async getCartItemById(id) {
    const cartItems = await CartItem.findOne({
      where: { id },
      include: [
        { model: Product },
        { model: ProductSize },
        // {
        //   model: ColorProduct,
        //   include: [
        //     {
        //       model: Color,
        //       attributes: ["title", "colorCode"], 
        //     },
        //   ],
        // },
      ],
    });
    return cartItems.get({ plain: true });
  }

  static async createCartItem(
    cartId,
    productId,
    quantity,
    productSizeId,
    productColorId
  ) {
    let cartItem = await CartItem.create({
      cartId,
      productId,
      quantity,
      productSizeId,
      productColorId,
    });
    cartItem = await CartItem.findOne({
      where: { id: cartItem.id },
      include: [
        { model: Product },
        { model: ProductSize },
        // { model: Color, through: ColorProduct },
      ],
    });
    return cartItem ? cartItem.get() : null;
  }

  static async updateCartItem(id, quantity) {
    const cartItem = await CartItem.findOne({
      where: { id },
      include: [
        { model: Product },
        { model: ProductSize },
        // { model: Color, through: ColorProduct },
      ],
    });
    if (cartItem) {
      await cartItem.update({ quantity });
      return cartItem.get();
    }
    return null;
  }

  static async deleteCartItem(id) {
    const cartItem = await CartItem.findOne({ where: { id } });
    if (cartItem) {
       cartItem.destroy();
       return cartItem.get();
    }
    return "CartItem not found";
  }
}

module.exports = CartItemService;
