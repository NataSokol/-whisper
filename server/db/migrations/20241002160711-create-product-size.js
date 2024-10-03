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
        type: Sequelize.INTEGER,
      },
      width: {
        type: Sequelize.INTEGER,
      },
      chestGirth: {
        type: Sequelize.INTEGER,
      },
      waistGirth: {
        type: Sequelize.INTEGER,
      },
      hipGirth: {
        type: Sequelize.INTEGER,
      },
      chestUnderGirth: {
        type: Sequelize.INTEGER,
      },
      frontLength: {
        type: Sequelize.INTEGER,
      },
      externalSeamLength: {
        type: Sequelize.INTEGER,
      },
      innerSeamLength: {
        type: Sequelize.INTEGER,
      },
      sleeveLength: {
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