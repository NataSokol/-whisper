"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Collections",
      [
        {
          title: "Летящий шепот",
          image: "http://placehold.it/120x100/",
        },
        {
          title: "Мягкий шепот",
          image: "http://placehold.it/120x100/",
        },
        {
          title: "Свободный шепот",
          image: "http://placehold.it/120x100/",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Collections", null, {});
  },
};
