"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductSizes",
      [
        {
          productId: 1,
          sizeTitle: "test",
          length: 1,
          width: 1,
          chestGirth: 1,
          waistGirth: 1,
          hipGirth: 1,
          chestUnderGirth: 1,
          frontLength: 1,
          externalSeamLength: 1,
          innerSeamLength: 1,
          quantity: 20,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductSizes", null, {});
  },
};
