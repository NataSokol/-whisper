"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaW4xxOX6qc38S-GLc2S5suBY92GVfmFN1Q&s",
          productId: 1,
        },

        {
          url: "https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg",
          productId: 2,
        },

        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzcvFbRRVC_PxoknHcudqxf856dI37QDIYA&s",
          productId: 3,
        },

        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sleRBWo_YUr7MY8DVKqy1IAq7BxCu5mPQ&s",
          productId: 4,
        },

        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEll8uICS2xqheOz2l1Vh1DcvpEyxgVrNfw&s",
          productId: 5,
        },

        {
          url: "https://onlinejpgtools.com/images/examples-onlinejpgtools/mouse.jpg",
          productId: 6,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
