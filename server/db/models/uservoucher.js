'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserVoucher extends Model {
    static associate({ User, Voucher }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Voucher, { foreignKey: 'voucherId' });
    }
  }
  UserVoucher.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      voucherId: {
        allowNull: false,
        type: DataTypes.INTEGER,

        references: {
          model: 'Vouchers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    { sequelize, modelName: 'UserVoucher' }
  );
  return UserVoucher;
};
