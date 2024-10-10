const OrdersServices = require("../services/OrdersServices");


exports.getAllOrders = async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const orders = await OrdersServices.getAllOrders(userId );
    res.status(200).json({ message: "success", orders });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
     const { orderId } = req.params;
    const order = await OrdersServices.getOneOrder(orderId);
    res.status(200).json({ message: "success", order });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};