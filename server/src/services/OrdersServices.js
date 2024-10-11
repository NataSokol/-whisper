const {
  Order,
  OrderItem,
  Product,
  ProductSize,
  ColorProduct,
  Color,
  Image
} = require("../../db/models");

class OrdersServices {
  // получить все продукты

  static getAllOrders = async (userId) => {
    try {
      const orders = await Order.findAll({
        where: { userId },
        include: [
          { model: OrderItem, as: 'orderItem' },
        ],
      });
      return orders.map((order) => order.get());

    } catch (error) {
      console.log(error);
    }
  };


  static getOneOrder = async (orderId) => {
    try {

      const orders = await Order.findOne({
        where: { id: orderId },
        include: [
          {
            model: OrderItem,
            as: 'orderItem',
            include: [
              {
                model: Product,
                attributes: ["title", "description", "price"],
                include: [
                  {
                    model: Image,
                  }
                ]
              },
              {
                model: ProductSize,
              },
            ],
          },
        ],
      });




      if (!orders) return null;

      const ordertItemsWithColor = await Promise.all(
        orders.orderItem.map(async (item) => {
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
        ...orders.get({ plain: true }),
        orderItem: ordertItemsWithColor,
      };

    } catch (error) {
      console.log(error)
    }
  }


  // получить один продукт
  static getOrderById = async (id) => {
    const order = await Order.findByPk(id, {
      include: [
        { model: OrderItem },
      ],
    });
    return order ? order.get() : null;
  }
}

module.exports = OrdersServices;