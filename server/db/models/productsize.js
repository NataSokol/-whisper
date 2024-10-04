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
        type: DataTypes.INTEGER,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      chestGirth: {
        type: DataTypes.INTEGER,
      },
      waistGirth: {
        type: DataTypes.INTEGER,
      },
      hipGirth: {
        type: DataTypes.INTEGER,
      },
      chestUnderGirth: {
        type: DataTypes.INTEGER,
      },
      frontLength: {
        type: DataTypes.INTEGER,
      },
      externalSeamLength: {
        type: DataTypes.INTEGER,
      },
      innerSeamLength: {
        type: DataTypes.INTEGER,
      },
      sleeveLength: {
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
