"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Subcategories",
      [
        {
          title: "костюмы",
        },
        {
          title: "рубашки и футболки",
        },
        {
          title: "брюки и шорты",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Subcategories", null, {});
  },
};
