'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order, Product, UserVoucher, Voucher, Favorite, Cart }) {
      this.hasMany(Order, { foreignKey: 'userId' });
      this.belongsToMany(Product, { through: Favorite, foreignKey: 'userId' });
      this.hasOne(Cart, { foreignKey: 'userId' });
      this.belongsToMany(Voucher, { through: UserVoucher, foreignKey: 'userId' });
    }
  }
  User.init(
    {
      phone: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      surname: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      birthday: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
