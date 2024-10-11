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
          title: "рубашки",
        },
        {
          title: "пижамы",
        },
        {
          title: "брюки и шорты",
        },
        {
          title: "леггинсы",
        },
        {
          title: "футболки",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Subcategories", null, {});
  },
};
