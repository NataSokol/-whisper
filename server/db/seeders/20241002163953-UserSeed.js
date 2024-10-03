"use strict";
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          phone: '28916756789',
          email: "Natasha@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Наташа",
          surname: "Сокол",
          birthday: new Date (1995, 6, 28 ),
          address: "г. Ухта",
          isAdmin: true,
        },
        {
          phone: '28916784536',
          email: "arthur_ne@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Артур",
          surname: "Тхагапсапоев",
          birthday: new Date (1999, 10, 5),
          address: "г. Залукокоаже",
          isAdmin: false,
        },
        {
          phone: '79110998072',
          email: "rostik_ne@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Ростислав",
          surname: "sadMaloy",
          birthday: new Date (2001, 0, 24), 
          address: "г. Санкт-Петербург",
          isAdmin: false,
        },
        {
          phone: '89819526789',
          email: "egor_ne@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Егор",
          surname: "Жуль",
          birthday: new Date (2002, 6, 24),
          address: "г. Шуя",
          isAdmin: false,
        },
        {
          phone: '89819529234',
          email: "polina_ne@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Полина",
          surname: "Вахаева",
          birthday: new Date (2001, 9, 31),
          address: "г. Балахна",
          isAdmin: false,
        },
        {
          phone: '89819529543',
          email: "admin@mail.com",
          password: await bcrypt.hash("Natasha28051995", 10),
          name: "Admin",
          surname: "Adminov",
          birthday: new Date (1995, 10, 5),
          address: "г. admin",
          isAdmin: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
