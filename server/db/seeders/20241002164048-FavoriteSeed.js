"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Favorites",
      [
        {
          userId: 2,
          productId: 1,
        },
        {
          userId: 2,
          productId: 2,
        },
        {
          userId: 2,
          productId: 3,
        },
        {
          userId: 2,
          productId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favorites", null, {});
  },
};
