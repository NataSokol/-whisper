const CartItemServices = require("../services/CartItem.services");

exports.getCartItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await CartItemServices.getCartItemById(id);
    res.status(200).json({ message: 'success', cartItem });
  } catch ({message}) {
    res.status(500).json({ error: message });
  }
};

exports.getCartItemsByCartId = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cartItems = await CartItemServices.getCartItemsByCartId(cartId);
    res.status(200).json({ message: 'success', cartItems });
  } catch ({message}) {
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
} catch ({message}) {
    res.status(500).json({ error: message });
}
};

exports.updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const {  quantity } = req.body;
    const cartItem = await CartItemServices.updateCartItem(id, quantity);
    res.status(200).json({ message: 'success', cartItem });
  } catch ({message}) {
    res.status(500).json({ error: message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await CartItemServices.deleteCartItem(id);
    res.status(200).json({ message: 'success', cartItem });
  } catch ({message}) {
    res.status(500).json({ error: message });
  }
};
