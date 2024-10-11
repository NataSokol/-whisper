"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ColorProducts",
      [
        { colorId: 1, productId: 1 },
        { colorId: 2, productId: 1 },
        { colorId: 3, productId: 2 },
        { colorId: 4, productId: 2 },
        { colorId: 5, productId: 3 },
        { colorId: 1, productId: 3 },
        { colorId: 2, productId: 4 },
        { colorId: 3, productId: 4 },
        { colorId: 4, productId: 5 },
        { colorId: 5, productId: 5 },
        { colorId: 1, productId: 6 },
        { colorId: 2, productId: 6 },
        { colorId: 3, productId: 7 },
        { colorId: 4, productId: 7 },
        { colorId: 5, productId: 8 },
        { colorId: 1, productId: 8 },
        { colorId: 2, productId: 9 },
        { colorId: 3, productId: 10 },
        { colorId: 4, productId: 10 },
        { colorId: 5, productId: 11 },
        { colorId: 1, productId: 12 },
        { colorId: 2, productId: 12 },
        { colorId: 3, productId: 13 },
        { colorId: 4, productId: 13 },
        { colorId: 5, productId: 14 },
        { colorId: 1, productId: 15 },
        { colorId: 2, productId: 15 },
        { colorId: 3, productId: 16 },
        { colorId: 4, productId: 16 },
        { colorId: 5, productId: 17 },
        { colorId: 1, productId: 18 },
        { colorId: 2, productId: 19 },
        { colorId: 3, productId: 20 },
        { colorId: 4, productId: 21 },
        { colorId: 5, productId: 21 },
        { colorId: 1, productId: 22 },
        { colorId: 2, productId: 23 },
        { colorId: 3, productId: 24 },
        { colorId: 4, productId: 25 },
        { colorId: 5, productId: 26 },
        { colorId: 1, productId: 27 },
        { colorId: 2, productId: 28 },
        { colorId: 3, productId: 29 },
        { colorId: 4, productId: 30 },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ColorProducts", null, {});
  },
};
