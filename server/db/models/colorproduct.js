"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ColorProduct extends Model {
    static associate({ Color, Product , CartItem, OrderItem}) {
      this.belongsTo(Color, { foreignKey: "colorId" });
      this.belongsTo(Product, { foreignKey: "productId" });
      this.hasMany(CartItem, { foreignKey: "productColorId" });
      this.hasMany(OrderItem, { foreignKey: "productColorId" });
    }
  }
  ColorProduct.init(
    {
      colorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Colors",
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
    },
    { sequelize, modelName: "ColorProduct" }
  );
  return ColorProduct;
};
