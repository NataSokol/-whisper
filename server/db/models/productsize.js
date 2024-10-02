"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    static associate({ Product, OrderItem, CartItem }) {
      this.belongsTo(Product, { foreignKey: "productId" });
      this.hasMany(OrderItem, { foreignKey: "productSizeId" });
      this.hasMany(CartItem, { foreignKey: "productSizeId" });
    }
  }
  ProductSize.init(
    {
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
      sizeTitle: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      length: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      width: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      chestGirth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      waistGirth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hipGirth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      chestUnderGirth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      frontLength: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      externalSeamLength: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      innerSeamLength: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ProductSize",
    }
  );
  return ProductSize;
};
