"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate({ ColorProduct, Product }) {
      this.belongsToMany(Product, {through: ColorProduct,  foreignKey: "colorId" });
    }
  }
  Color.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      colorCode: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Color",
    }
  );
  return Color;
};
