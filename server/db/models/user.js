"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order, Product, UserVoucher, Voucher, Favorite, Cart }) {
      this.hasMany(Order, { foreignKey: "userId" });
      this.belongsToMany(Product, {
        through: Favorite,
        as: "LikedProducts",
        foreignKey: "userId",
      });
      this.hasOne(Cart, { foreignKey: "userId" });
      this.belongsToMany(Voucher, {
        through: UserVoucher,
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      phone: {
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
        type: DataTypes.TEXT,
      },
      surname: {
        type: DataTypes.TEXT,
      },
      birthday: {
        type: DataTypes.DATE,
      },
      address: {
        type: DataTypes.TEXT,
      },
      isAdmin: {
        defaultValue: false,
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
