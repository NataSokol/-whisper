"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Colors",
      [
        {
          title: "черный",
          colorCode: "#000000",
        },
        {
          title: "слоновая кость",
          colorCode: "#FAEBD7",
        },
        {
          title: "серый",
          colorCode: "#A9A9A9",
        },
        {
          title: "белый",
          colorCode: "#FFFFFF",
        },
        {
          title: "розовый",
          colorCode: "#DB7093",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {});
  },
};
