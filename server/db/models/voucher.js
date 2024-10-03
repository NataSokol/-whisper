"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    static associate({ UserVoucher, User }) {
      this.belongsToMany(User, { through: UserVoucher, foreignKey: 'voucherId' });
    }
  }
  Voucher.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    { sequelize, modelName: "Voucher" }
  );
  return Voucher;
};
