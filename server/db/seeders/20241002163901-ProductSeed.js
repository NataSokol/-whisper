"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          title: 'Свитшот с эффектом велюра "Просекко, плиз"',
          price: 5790,
          description:
            "Свитшот отлично сочетается с нашими джоггерами, велосипедками, а также с джинсами, леггинсами, шортами и даже с юбками и платьями! Идеален для уютного вечера дома и на природе, прогулок по городу и путешествий.",
          composition: "90% хлопок, 10% полиэстер",
          collectionId: 3,
          categoryId: 2,
          subcategoryId: 3,
        },
        {
          title: "Тёплый шёпот",
          price: 4590,
          description:
            "Мягкая, теплая, уютная и не прихотливая ткань фланель (100% хлопок). Такой костюм точно скрасит ваши холодные вечера и подарит много тепла и уюта. ",
          composition: "100% хлопок",
          collectionId: 2,
          categoryId: 2,
          subcategoryId: 1,
        },
        {
          title: "Велосипедки с эффектом велюра",
          price: 1290,
          description:
            "Ткань невероятно мягкая и приятная на ощупь. Велосипедки идеально подойдут для дома, прогулок, поездок на природу или на море. А с нашей футболкой с эффектом велюра получится отличное сочетание! ",
          composition: "92% хлопок , 8% лайкра",
          collectionId: 2,
          categoryId: 3,
          subcategoryId: 1,
        },
        {
          title: "Игривый шёпот",
          price: 3890,
          salePrice: 2990,
          description:
            "Домашний костюм топ-лиф и шорты из хлопка с эффектом велюра- утонченный, комфортный, невероятно нежный и приятный наощупь. В нем ты чувствуешь себя привлекательной и обольстительной.",
          composition: "92% хлопок , 8% лайкра",
          collectionId: 1,
          categoryId: 2,
          subcategoryId: 1,
        },
        {
          title: "Джоггеры с эффектом велюра",
          price: 4590,
          description:
            "Отлично сочетаются с нашими свитшотами, а также футболками, майками, топами и верхней одеждой. Идеальны для уютного вечера дома и на природе, прогулок по городу и путешествий.",
          composition: "90% хлопок, 10% полиэстер",
          collectionId: 3,
          categoryId: 2,
          subcategoryId: 3,
        },
        {
          title: "Воздушный шёпот",
          price: 4990,
          salePrice: 3900,
          description:
            "Воздушный шепот - пижама из муслина, состоящая из топа на регулирующихся бретелях и шорт с воланами.",
          composition: "100% хлопок",
          collectionId: 1,
          categoryId: 2,
          subcategoryId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
