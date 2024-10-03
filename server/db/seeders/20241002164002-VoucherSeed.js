"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Vouchers",
      [
        {
          title: "cupon1",
        },
        {
          title: "cupon2",
        },
        {
          title: "cupon3",
        },
        {
          title: "cupon4",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vouchers", null, {});
  },
};
