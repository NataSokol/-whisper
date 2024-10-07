const CartItemServices = require("../services/CartItem.services");

exports.getCartItemById = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const cartItem = await CartItemServices.getCartItemById(cartItemId);
    res.status(200).json({ message: 'success', cartItem });
  } catch (error) {
    res.status(500).json({ error: message });
  }
};

exports.createCartItem = async (req, res) => {
    try {
    const { cartId, productId, quantity, productSizeId, productColorId } =
      req.body;
    const cartItem = await CartItemServices.createCartItem(
      cartId,
      productId,
      quantity,
      productSizeId,
      productColorId
    );
    res.status(201).json({ message: 'success', cartItem });
} catch (error) {
    res.status(500).json({ error: message });
}
};

exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const {  quantity } = req.body;
    const cartItem = await CartItemServices.updateCartItem(id, quantity);
    res.status(200).json({ message: 'success', cartItem });
  } catch (error) {
    res.status(500).json({ error: message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await CartItemServices.deleteCartItem(id);
    res.status(200).json({ message: 'success', cartItem });
  } catch (error) {
    res.status(500).json({ error: message });
  }
};
