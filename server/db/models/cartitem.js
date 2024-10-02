"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate({ Cart, Product, ProductSize }) {
      this.belongsTo(Cart, { foreignKey: "cartId" });
      this.belongsTo(Product, { foreignKey: "productId" });
      this.belongsTo(ProductSize, { foreignKey: "productSizeId" });
      this.belongsTo(ColorProduct, { foreignKey: "productColorId" });
    }
  }
  CartItem.init(
    {
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cartId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Carts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    },
    { sequelize, modelName: "CartItem" }
  );
  return CartItem;
};
