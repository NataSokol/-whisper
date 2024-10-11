"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ProductSizes",
      [
        { productId: 1, sizeTitle: "s", waistGirth: 60, hipGirth: 90, externalSeamLength: 95, innerSeamLength: 70, quantity: 1 },
        { productId: 1, sizeTitle: "m", waistGirth: 65, hipGirth: 95, externalSeamLength: 100, innerSeamLength: 72, quantity: 1 },
        { productId: 2, sizeTitle: "l", waistGirth: 70, hipGirth: 100, externalSeamLength: 105, innerSeamLength: 75, quantity: 1 },
        { productId: 3, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 4, sizeTitle: "s", waistGirth: 60, hipGirth: 90, externalSeamLength: 95, innerSeamLength: 70, quantity: 1 },
        { productId: 5, sizeTitle: "m", waistGirth: 66, hipGirth: 92, externalSeamLength: 99, innerSeamLength: 71, quantity: 1 },
        { productId: 6, sizeTitle: "l", waistGirth: 71, hipGirth: 103, externalSeamLength: 106, innerSeamLength: 76, quantity: 1 },
        { productId: 6, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 7, sizeTitle: "s", waistGirth: 62, hipGirth: 91, externalSeamLength: 97, innerSeamLength: 73, quantity: 1 },
        { productId: 8, sizeTitle: "m", waistGirth: 67, hipGirth: 96, externalSeamLength: 101, innerSeamLength: 72, quantity: 1 },
        { productId: 9, sizeTitle: "l", waistGirth: 72, hipGirth: 104, externalSeamLength: 107, innerSeamLength: 77, quantity: 1 },
        { productId: 10, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 11, sizeTitle: "s", waistGirth: 63, hipGirth: 93, externalSeamLength: 96, innerSeamLength: 72, quantity: 1 },
        { productId: 12, sizeTitle: "m", waistGirth: 68, hipGirth: 97, externalSeamLength: 102, innerSeamLength: 74, quantity: 1 },
        { productId: 13, sizeTitle: "l", waistGirth: 73, hipGirth: 105, externalSeamLength: 108, innerSeamLength: 78, quantity: 1 },
        { productId: 14, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 15, sizeTitle: "s", waistGirth: 61, hipGirth: 89, externalSeamLength: 95, innerSeamLength: 70, quantity: 1 },
        { productId: 16, sizeTitle: "m", waistGirth: 66, hipGirth: 95, externalSeamLength: 100, innerSeamLength: 73, quantity: 1 },
        { productId: 17, sizeTitle: "l", waistGirth: 71, hipGirth: 102, externalSeamLength: 106, innerSeamLength: 76, quantity: 1 },
        { productId: 18, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 19, sizeTitle: "s", waistGirth: 60, hipGirth: 90, externalSeamLength: 95, innerSeamLength: 70, quantity: 1 },
        { productId: 20, sizeTitle: "m", waistGirth: 65, hipGirth: 95, externalSeamLength: 100, innerSeamLength: 72, quantity: 1 },
        { productId: 21, sizeTitle: "l", waistGirth: 70, hipGirth: 100, externalSeamLength: 105, innerSeamLength: 75, quantity: 1 },
        { productId: 22, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 23, sizeTitle: "s", waistGirth: 60, hipGirth: 90, externalSeamLength: 95, innerSeamLength: 70, quantity: 1 },
        { productId: 24, sizeTitle: "m", waistGirth: 67, hipGirth: 93, externalSeamLength: 101, innerSeamLength: 74, quantity: 1 },
        { productId: 25, sizeTitle: "l", waistGirth: 72, hipGirth: 102, externalSeamLength: 107, innerSeamLength: 77, quantity: 1 },
        { productId: 26, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },
        { productId: 27, sizeTitle: "s", waistGirth: 62, hipGirth: 91, externalSeamLength: 96, innerSeamLength: 72, quantity: 1 },
        { productId: 28, sizeTitle: "m", waistGirth: 66, hipGirth: 94, externalSeamLength: 100, innerSeamLength: 73, quantity: 1 },
        { productId: 29, sizeTitle: "l", waistGirth: 73, hipGirth: 105, externalSeamLength: 107, innerSeamLength: 76, quantity: 1 },
        { productId: 30, sizeTitle: "one size", waistGirth: 64, hipGirth: 112, externalSeamLength: 98, innerSeamLength: 70, quantity: 1 },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductSizes", null, {});
  },
};
