"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({User, Product, CartItem}) {
      this.belongsTo(User, { foreignKey: "userId" });
      // this.belongsToMany(Product, {through: CartItem, foreignKey: "cartId"})
      this.hasMany(CartItem, { foreignKey: "cartId" });
    }
  }
  Cart.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      total: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      salePrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};