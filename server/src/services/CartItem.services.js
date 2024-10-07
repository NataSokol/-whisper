const {
  CartItem,
  Product,
  ProductSize,
  Color,
  ColorProduct,
} = require("../db/models");

class CartItemService {
  static async getCartItemById(cartItemId) {
    const cartItems = await CartItem.findAll(
      { where: { id: cartItemId } },
      {
        include: [
          { model: Product },
          { model: ProductSize },
          { model: Color, through: ColorProduct },
        ],
      }
    );
    return cartItems;
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
    cartItem = await CartItem.findOne(
      { where: { id: cartItem.id} },
      {
        include: [
          { model: Product },
          { model: ProductSize },
          { model: Color, through: ColorProduct },
        ],
      }
    );
    return cartItem ? cartItem.get() : null;
  }

  static async updateCartItem(
    id,
    quantity,
  ) {
    const cartItem = await CartItem.findOne({ where: { id} }, {include: { model: CartItem}});
    if (cartItem) {
        await cartItem.update({ quantity });
        return cartItem.get();
      }
      return null;
  }

  static async deleteCartItem(id) {
    const cartItem = await CartItem.findOne({ where: { id } });
    if (cartItem) {
      return cartItem.destroy();
    }
    return "CartItem not found";
  }
}

module.exports = CartItemService;
