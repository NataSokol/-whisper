"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Collections",
      [
        {
          title: "Летящий шепот",
          image: "https://image.hm.com/assets/hm/66/c2/66c2d73811739a656b3d15e46891731fa16c39da.jpg?imwidth=1260",
        },
        {
          title: "Мягкий шепот",
          image: "https://image.hm.com/assets/hm/e7/52/e75251b263c3deaebfe53d04a3a3dc2f95e8ac74.jpg?imwidth=1260",
        },
        {
          title: "Свободный шепот",
          image: "https://image.hm.com/assets/hm/78/b6/78b63414636105928ac0add9cbabad595b761d96.jpg?imwidth=1260",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Collections", null, {});
  },
};
