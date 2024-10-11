"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, Product, ProductSize, ColorProduct }) {
      this.belongsTo(Order, { foreignKey: "orderId" });
      this.belongsTo(Product, { foreignKey: "productId" });
      this.belongsTo(ProductSize, { foreignKey: "productSizeId" });
      this.belongsTo(ColorProduct, { foreignKey: "productColorId" });
    }
  }
  OrderItem.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productSizeId: {
        allowNull: false,
        type: DataTypes.INTEGER,

        references: {
          model: "ProductSizes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      productColorId: {
        allowNull: false,
        type: DataTypes.INTEGER,

        references: {
          model: "ColorProducts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );
  return OrderItem;
};
