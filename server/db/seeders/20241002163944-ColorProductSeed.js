"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ColorProducts",
      [
        {
          colorId: 1,
          productId: 1,
        },
        {
          colorId: 1,
          productId: 2,
        },        {
          colorId: 1,
          productId: 3,
        },        {
          colorId: 1,
          productId: 4,
        },        {
          colorId: 2,
          productId: 5,
        },        {
          colorId: 2,
          productId: 6,
        },        {
          colorId: 3,
          productId: 2,
        },        {
          colorId: 4,
          productId: 2,
        },        {
          colorId: 4,
          productId: 6,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ColorProducts", null, {});
  },
};
