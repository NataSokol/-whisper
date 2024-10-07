const { Cart, CartItem } = require("../db/models");

class CartServices {
  static getCartByUserId = async (userId) => {
    const cart = await Cart.findOne({ where: { userId } }, {
      include: { model: CartItem, 
        include: [
          { model: Product },
          { model: ProductSize },
          { model: Color, through: ColorProduct },
        ],
      }})
    return cart ? cart.get() : null;
  };

  static createCart = async (userId) => {
    let cart = await Cart.crate({ userId, total: 0, salePrice: 0});
    cart = await Cart.findOne({  id: cart.id, where: { userId } }, {include: { model: CartItem, 
        include: [
          { model: Product },
          { model: ProductSize },
          { model: Color, through: ColorProduct },
        ],}})
    return cart ? cart.get() : null;
  };

  static updateCart = async (id, userId,  total, salePrice ) => {
    const cart = await Cart.findOne({ where: { id , userId} }, {include: { model: CartItem, 
        include: [
          { model: Product },
          { model: ProductSize },
          { model: Color, through: ColorProduct },
        ],}});
    if (cart) {
      await cart.update({ total, salePrice });
      return cart.get();
    }
    return null;
  };

  static deleteCart = async (id,userId) => {
    const cart = await Cart.findOne({ where: { id, userId } });
    if (cart) {
      return cart.destroy();
    }
    return "Cart not found";
  };
}

MediaSourceHandle.exports = CartServices;
