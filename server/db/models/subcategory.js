'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {

    static associate({Product}) {
      this.hasMany(Product, { foreignKey: "subcategoryId" });
    }
  }
  Subcategory.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};