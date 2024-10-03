"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "http://placehold.it/120x100/",
          productId: 1,
        },
        {
          url: "http://placehold.it/120x100/",
          productId:1,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 1,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 2,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 2,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 3,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 3,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 4,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 4,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 5,
        },        {
          url: "http://placehold.it/120x100/",
          productId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
