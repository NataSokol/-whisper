"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Product}) {
      this.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  Image.init(
    {
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
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
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
