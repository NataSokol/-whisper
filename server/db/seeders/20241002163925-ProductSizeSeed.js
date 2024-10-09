"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductSizes",
      [
        {
          productId: 1,
          sizeTitle: "one size",
          width: 58,
          frontLength: 55,
          sleeveLength: 73,
          quantity: 20,
        },
        {
          productId: 2,
          sizeTitle: "one size",
          chestGirth: 102,
          waistGirth: 64,
          hipGirth: 104,
          frontLength: 60,
          externalSeamLength: 101,
          sleeveLength: 58,
          quantity: 5,
        },
        {
          productId: 3,
          sizeTitle: "one size",
          length: 42,
          waistGirth: 60,
          hipGirth: 100,
          quantity: 15,
        },
        {
          productId: 4,
          sizeTitle: "one size",
          length: 31,
          chestGirth: 94,
          waistGirth: 65,
          hipGirth: 95,
          chestUnderGirth: 64,
          quantity: 10,
        },
        {
          productId: 5,
          sizeTitle: "one size",
          waistGirth: 64,
          hipGirth: 112,
          externalSeamLength: 98,
          innerSeamLength: 70,
          quantity: 50,
        },
        {
          productId: 6,
          sizeTitle: "one size",
          length: 31,
          chestGirth: 94,
          waistGirth: 65,
          hipGirth: 95,
          chestUnderGirth: 64,
          quantity: 32,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductSizes", null, {});
  },
};
