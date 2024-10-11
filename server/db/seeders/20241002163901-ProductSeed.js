"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          "id": 1,
          "title": "Костюм для дома",
          "price": 3499,
          "description": "Уютный костюм из мягкого материала с капюшоном и брюками на резинке. Идеален для дома.",
          "composition": "100% хлопок",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 2,
          "title": "Теплый комплект",
          "price": 2999,
          "description": "Костюм из флиса с забавным узором, который обеспечит тепло в холодные вечера.",
          "composition": "80% полиэстер, 20% хлопок",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 3,
          "title": "Летний костюм",
          "price": 2999,
          "description": "Легкий и воздухопроницаемый костюм для теплых дней. Идеально подходит для отдыха дома.",
          "composition": "70% хлопок, 30% лен",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 4,
          "title": "Спортивный костюм для дома",
          "price": 2799,
          "description": "Стильный спортивный костюм, идеально подходящий для занятий спортом и отдыха дома.",
          "composition": "90% хлопок, 10% эластан",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 5,
          "title": "Элегантный домашний костюм",
          "price": 4199,
          "description": "Элегантный комплект с брюками и кофточкой, подходит для домашнего вечера.",
          "composition": "60% вискоза, 40% полиэстер",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 6,
          "title": "Классический комплект",
          "price": 3599,
          "description": "Классический костюм. Комфортный и стильный вариант для дома.",
          "composition": "50% акрил, 50% хлопок",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 1
        },
        {
          "id": 7,
          "title": "Рубашка для сна из хлопка",
          "price": 3299,
          "description": "Удобная рубашка для сна, выполненная из мягкого хлопка, идеально подходит для теплых ночей.",
          "composition": "100% хлопок",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 8,
          "title": "Легкая рубашка для сна ",
          "price": 3599,
          "description": "Рубашка для сна с милым звездным принтом, выполненная из дышащих материалов.",
          "composition": "95% вискоза, 5% эластан",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 9,
          "title": "Теплая рубашка для сна с длинным рукавом",
          "price": 2999,
          "description": "Комфортная рубашка для холодных ночей с длинными рукавами и уютным воротником.",
          "composition": "80% акрил, 20% шерсть",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 10,
          "title": "Шелковая рубашка для сна ",
          "price": 4999,
          "description": "Элегантная шелковая рубашка для сна, украшенная кружевом, для романтичного настроения.",
          "composition": "100% шелк",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 11,
          "title": "Рубашка-пижама ",
          "price": 2999,
          "description": "Удобная рубашка-пижама с ярким цветочным принтом, подходящая для сна и отдыха.",
          "composition": "60% хлопок, 40% полиэстер",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 12,
          "title": "Спортивная рубашка для сна ",
          "price": 3299,
          "description": "Современная спортивная рубашка для сна с капюшоном, отлично подойдет для активного отдыха дома.",
          "composition": "70% хлопок, 30% полиэстер",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 3
        },
        {
          "id": 13,
          "title": "Удобные домашние брюки из флиса",
          "price": 2499,
          "description": "Невероятно мягкие брюки из флиса для максимального комфорта дома.",
          "composition": "100% полиэстер",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 14,
          "title": "Летние домашние штаны",
          "price": 2599,
          "description": "Легкие шорты из хлопка, идеальные для тёплых летних дней и прогулок по дому.",
          "composition": "100% хлопок",
          "collectionId": 1,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 15,
          "title": "Брюки с эластичным поясом",
          "price": 2899,
          "description": "Удобные спортивные брюки с эластичным поясом для активного отдыха дома.",
          "composition": "80% хлопок, 20% полиэстер",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 16,
          "title": "Шорты для сна из мягкой вискозы",
          "price": 2599,
          "description": "Комфортные шорты для сна из тонкой вискозы. Легкие и дышащие.",
          "composition": "95% вискоза, 5% эластан",
          "collectionId": 2,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 17,
          "title": "Теплые домашние брюки с карманами",
          "price": 3299,
          "description": "Практичные брюки с удобными карманами, сделаны из теплого материала.",
          "composition": "70% хлопок, 30% полиэстер",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 18,
          "title": "Мягкие и удобные штаны для дома",
          "price": 2799,
          "description": "Стильные шорты с высокой талией, отлично подходят для домашних сборищ или отдыха.",
          "composition": "100% лен",
          "collectionId": 3,
          "categoryId": 2,
          "subcategoryId": 4
        },
        {
          "id": 19,
          "title": "Легинсы для фитнеса с высокой талией",
          "price": 2999,
          "description": "Удобные легинсы с высокой талией, идеально подходящие для занятий спортом.",
          "composition": "85% полиэстер, 15% спандекс",
          "collectionId": 1,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 20,
          "title": "Спортивные легинсы ",
          "price": 3199,
          "description": "Яркие легинсы с оригинальным принтом для уверенности в каждом движении.",
          "composition": "80% нейлон, 20% эластан",
          "collectionId": 1,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 21,
          "title": "Легинсы для йоги с карманами",
          "price": 2999,
          "description": "Практичные легинсы с удобными карманами для личных вещей во время занятий.",
          "composition": "90% хлопок, 10% спандекс",
          "collectionId": 2,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 22,
          "title": "Термолегинсы для активного отдыха",
          "price": 3299,
          "description": "Теплые легинсы, идеальные для осенних и зимних прогулок на свежем воздухе.",
          "composition": "75% полиэстер, 25% эластан",
          "collectionId": 2,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 23,
          "title": "Легинсы с сетчатыми вставками",
          "price": 2799,
          "description": "Легинсы с функциональными сетчатыми вставками для лучшей вентиляции.",
          "composition": "78% нейлон, 22% спандекс",
          "collectionId": 3,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 24,
          "title": "Легинсы для бега с отражающими элементами",
          "price": 3199,
          "description": "Безопасные легинсы с отражающими элементами для вечерних пробежек.",
          "composition": "85% полиэстер, 15% эластан",
          "collectionId": 3,
          "categoryId": 3,
          "subcategoryId": 5
        },
        {
          "id": 25,
          "title": "Футболка с коротким рукавом для тренировок",
          "price": 2799,
          "description": "Удобная футболка из дышащего материала, идеальная для тренировок и активного отдыха.",
          "composition": "100% хлопок",
          "collectionId": 1,
          "categoryId": 3,
          "subcategoryId": 6
        },
        {
          "id": 26,
          "title": "Спортивная футболка с длинным рукавом",
          "price": 2999,
          "description": "Футболка с длинным рукавом, отлично подходит для занятий в прохладную погоду.",
          "composition": "90% полиэстер, 10% спандекс",
          "collectionId": 1,
          "categoryId": 3,
          "subcategoryId": 6
        },
        {
          "id": 27,
          "title": "Футболка с ярким принтом",
          "price": 2499,
          "description": "Стильная футболка с ярким принтом, которая добавит индивидуальность вашему образу.",
          "composition": "100% хлопок",
          "collectionId": 2,
          "categoryId": 3,
          "subcategoryId": 6
        },
        {
          "id": 28,
          "title": "Удобная футболка из вискозы",
          "price": 2999,
          "description": "Легкая и комфортная футболка, идеально подходит для повседневного ношения.",
          "composition": "95% вискоза, 5% эластан",
          "collectionId": 2,
          "categoryId": 3,
          "subcategoryId": 6
        },
        {
          "id": 29,
          "title": "Футболка для фитнеса с сетчатыми вставками",
          "price": 3199,
          "description": "Футболка с сетчатыми вставками для лучшей вентиляции, идеально подходит для интенсивных тренировок.",
          "composition": "85% полиэстер, 15% спандекс",
          "collectionId": 3,
          "categoryId": 3,
          "subcategoryId": 6
        },
        {
          "id": 30,
          "title": "Базовая боди ",
          "price": 2499,
          "description": "Классическая базовая футболка для мужчин, выполненная из легкого и прочного материала.",
          "composition": "100% хлопок",
          "collectionId": 3,
          "categoryId": 3,
          "subcategoryId": 6
        }


      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
