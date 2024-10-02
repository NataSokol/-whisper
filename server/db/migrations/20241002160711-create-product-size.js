'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductSizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sizeTitle: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      length: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      width: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      chestGirth: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      waistGirth: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hipGirth: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      chestUnderGirth: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      frontLength: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      externalSeamLength: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      innerSeamLength: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductSizes');
  }
};