"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    static associate({Product}) {
      this.hasMany(Product, { foreignKey: "collectionId" });
    }
  }
  Collection.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,

      },
     },
    {
      sequelize,
      modelName: "Collection",
    }
  );
  return Collection;
};