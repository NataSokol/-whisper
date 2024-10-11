"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        { url: "https://image.hm.com/assets/hm/59/9e/599e2ddb1e6af5494acb04c972df4ef6a16efc68.jpg?imwidth=1260", productId: 1 },
        { url: "https://image.hm.com/assets/hm/e5/21/e52182bda538fdb2a8b2fbc62328348159a83d87.jpg?imwidth=1260", productId: 1 },
        { url: "https://image.hm.com/assets/hm/7c/ef/7cef2b6da444327152d804da82f1566461703fe7.jpg?imwidth=1260", productId: 1 },

        { url: "https://image.hm.com/assets/hm/94/68/946841b5f10a43b748ee820d600f9322b60120b7.jpg?imwidth=1260", productId: 2 },
        { url: "https://image.hm.com/assets/hm/83/dd/83dd478e543774fd0766cf1f405b66d50cf7c4fd.jpg?imwidth=1260", productId: 2 },
        { url: "https://image.hm.com/assets/hm/8f/57/8f57a9d16f7282cec9c94ebfaf65f728e2bd5fb9.jpg?imwidth=1260", productId: 2 },

        { url: "https://image.hm.com/assets/hm/6f/b6/6fb637fb346edb11b7a1c9d2941b8df29a7c8151.jpg?imwidth=1260", productId: 3 },
        { url: "https://image.hm.com/assets/hm/57/dc/57dc082551eb370c175c941f0337ceea6fe21711.jpg?imwidth=1260", productId: 3 },
        { url: "https://image.hm.com/assets/hm/cb/14/cb142583a99de8565d015d6109bdf575469b1cde.jpg?imwidth=1260", productId: 3 },

        { url: "https://image.hm.com/assets/hm/a3/da/a3dae74394fb8fe07a75843d801f9e98b9fb33ae.jpg?imwidth=1260", productId: 4 },
        { url: "https://image.hm.com/assets/hm/8d/c1/8dc1fc6d0105f7bfac1e9186e77a2f1e6f7ce935.jpg?imwidth=1260", productId: 4 },
        { url: "https://image.hm.com/assets/hm/7a/62/7a6248fce6994cf3311a463671891317e2af489d.jpg?imwidth=564", productId: 4 },

        { url: "https://image.hm.com/assets/hm/57/64/57648acaf9c62d07a1961d2f456ce4089bb9348d.jpg?imwidth=564", productId: 5 },
        { url: "https://image.hm.com/assets/hm/d7/54/d7546a039e4fa97762e93fbeffe4278b1ebba430.jpg?imwidth=564", productId: 5 },
        { url: "https://image.hm.com/assets/hm/95/92/95929b9740dac600d5ea0f071a810dbea7360f68.jpg?imwidth=564", productId: 5 },

        { url: "https://image.hm.com/assets/hm/9e/b1/9eb1ec83eb58550ad7901f6acd159f0db196ee9e.jpg?imwidth=564", productId: 6 },
        { url: "https://image.hm.com/assets/hm/4c/b7/4cb799d48eca57cdd01449a07a0fa118f94b0839.jpg?imwidth=564", productId: 6 },
        { url: "https://image.hm.com/assets/hm/ce/ca/ceca0fbbba6a82ad7deb68d7b3400eda44646935.jpg?imwidth=564", productId: 6 },

        { url: "https://image.hm.com/assets/hm/84/1e/841ec8cc5eb0599d689c411c622adcb160b527c1.jpg?imwidth=564", productId: 7 },
        { url: "https://image.hm.com/assets/hm/2b/14/2b14e415a7c64dde75503a0293a6d3eeae6b4b4b.jpg?imwidth=564", productId: 7 },
        { url: "https://image.hm.com/assets/hm/ad/a1/ada15b031bd7a3ba219afdc1ce78b1a183c581e8.jpg?imwidth=564", productId: 7 },

        { url: "https://image.hm.com/assets/hm/01/2f/012fcd96ba7bf159d67995bb20c95f256412c2f9.jpg?imwidth=564", productId: 8 },
        { url: "https://image.hm.com/assets/hm/44/86/4486184547704c902f9968d528028b3fd86d63a6.jpg?imwidth=564", productId: 8 },
        { url: "https://image.hm.com/assets/hm/9b/72/9b72636c97866aff2541b6fc0afe1fdcbe148fd8.jpg?imwidth=564", productId: 8 },

        { url: "https://image.hm.com/assets/hm/32/75/32755464d2c99307cfc6597992d7baf0971f134f.jpg?imwidth=564", productId: 9 },
        { url: "https://image.hm.com/assets/hm/e1/0f/e10f589b0a3fc4b580507f042994a835c26a1f61.jpg?imwidth=564", productId: 9 },
        { url: "https://image.hm.com/assets/hm/b6/8a/b68a6f06255ec2525ef2d8451555fc6d1d676c2f.jpg?imwidth=564", productId: 9 },

        { url: "https://image.hm.com/assets/hm/fd/80/fd80233b2a08f7826f6b85ea048bf7d726a8e25d.jpg?imwidth=564", productId: 10 },
        { url: "https://image.hm.com/assets/hm/88/0c/880c598bb836076b6fa741c46028c288e6c14cb2.jpg?imwidth=564", productId: 10 },
        { url: "https://image.hm.com/assets/hm/2e/f0/2ef0cfa29014ed10e2ffd65fc86d49f0ed1136cd.jpg?imwidth=564", productId: 10 },

        { url: "https://image.hm.com/assets/hm/74/a3/74a3320f9a299a57687358c1eaec127ba0ad2e7f.jpg?imwidth=564", productId: 11 },
        { url: "https://image.hm.com/assets/hm/24/c4/24c42db5d1997274f42bd8f13fd0706444807911.jpg?imwidth=564", productId: 11 },
        { url: "https://image.hm.com/assets/hm/ef/c5/efc5da92d34f566ac9d0f076bcb7dcfb9d0af898.jpg?imwidth=564", productId: 11 },

        { url: "https://image.hm.com/assets/hm/75/07/75076f915476b78112e6fe79fda82a4a1d480cc6.jpg?imwidth=564", productId: 12 },
        { url: "https://image.hm.com/assets/hm/74/08/740879b984fd0d8c95fcd5608efd1983d7a3679b.jpg?imwidth=564", productId: 12 },
        { url: "https://image.hm.com/assets/hm/30/8d/308dcaeb04c538f12b7bb1115ba8fb411f48bc19.jpg?imwidth=564", productId: 12 },

        { url: "https://image.hm.com/assets/hm/cd/d1/cdd1e86ff8dd0515ca5372ab137791cd5d3cd93f.jpg?imwidth=564", productId: 13 },
        { url: "https://image.hm.com/assets/hm/5f/c1/5fc11e473bcf1d779ae94513c92223f1dc3fd884.jpg?imwidth=564", productId: 13 },
        { url: "https://image.hm.com/assets/hm/b2/db/b2db1d4a8b3ac031b3c6552f9f7c95622ee6e985.jpg?imwidth=564", productId: 13 },

        { url: "https://image.hm.com/assets/hm/78/87/78877c33f6508904794c419fc968304dd3cb125a.jpg?imwidth=564", productId: 14 },
        { url: "https://image.hm.com/assets/hm/a5/58/a558e08c8e9be85bf1f74bcb2ce6ca51282a9711.jpg?imwidth=1260", productId: 14 },
        { url: "https://image.hm.com/assets/hm/24/73/2473de0d7230858cb3fba0c6723edafbb26cd4b5.jpg?imwidth=564", productId: 14 },

        { url: "https://image.hm.com/assets/hm/77/1d/771d418afb94d34d2e2651775b7abfeef12c7407.jpg?imwidth=564", productId: 15 },
        { url: "https://image.hm.com/assets/hm/96/8c/968c1ea095e89a08de8244765dc7899ed31de3d2.jpg?imwidth=564", productId: 15 },
        { url: "https://image.hm.com/assets/hm/57/62/57626b0efaeafae664c1249a36779e7479ca22a6.jpg?imwidth=564", productId: 15 },

        { url: "https://image.hm.com/assets/hm/16/b8/16b8cdcb922f7a7ebcd9b5ef35308132a7d83022.jpg?imwidth=564", productId: 16 },
        { url: "https://image.hm.com/assets/hm/10/41/104179407325573ce7d0eed4b51b96a2628227f6.jpg?imwidth=564", productId: 16 },
        { url: "https://image.hm.com/assets/hm/bb/e0/bbe065fcc21f3cef86facf5df0426b3a3b9d7889.jpg?imwidth=564", productId: 16 },

        { url: "https://image.hm.com/assets/hm/7a/51/7a51a5a6f407896e485b269a7b8ca96779b46dd9.jpg?imwidth=564", productId: 17 },
        { url: "https://image.hm.com/assets/hm/a0/83/a083350ecc2f7a107004b654b921e794dc236fb8.jpg?imwidth=564", productId: 17 },
        { url: "https://image.hm.com/assets/hm/ab/a7/aba7b150dd4769ebf9e76fb86bf06277d01d12a1.jpg?imwidth=564", productId: 17 },

        { url: "https://image.hm.com/assets/hm/35/69/35691f89157b09f11a7d77f3615fcc32d9e1692e.jpg?imwidth=564", productId: 18 },
        { url: "https://image.hm.com/assets/hm/bd/04/bd04ea164057199ebef1d6e73979b1723c47960b.jpg?imwidth=564", productId: 18 },
        { url: "https://image.hm.com/assets/hm/c3/89/c3895778c460221f25ad22354d218438109c074e.jpg?imwidth=564", productId: 18 },

        { url: "https://image.hm.com/assets/hm/ae/ae/aeaeb85f64ae84b1c533b6d86af5510c1422dd0e.jpg?imwidth=564", productId: 19 },
        { url: "https://image.hm.com/assets/hm/cf/1a/cf1a1d102de13fc921bd30e3c8f583cb3ac80e50.jpg?imwidth=564", productId: 19 },
        { url: "https://image.hm.com/assets/hm/a8/7f/a87f0c422bdcbfc4b57dbbdab52e2aad6f21df1c.jpg?imwidth=564", productId: 19 },

        { url: "https://image.hm.com/assets/hm/e3/a7/e3a7c03d290083dd852612737f44916708e2309b.jpg?imwidth=564", productId: 20 },
        { url: "https://image.hm.com/assets/hm/36/5f/365f714a39fc8979f4a14af28cca9d16c7efe4d1.jpg?imwidth=564", productId: 20 },
        { url: "https://image.hm.com/assets/hm/72/30/72302bc174818a9ff47a144b07679cf188086d34.jpg?imwidth=564", productId: 20 },

        { url: "https://image.hm.com/assets/hm/be/0c/be0c40fb194f20efd8f29cf1c0b121bb5018e2bf.jpg?imwidth=564", productId: 21 },
        { url: "https://image.hm.com/assets/hm/57/22/5722530d9338667f2d37daf7e034e33883a30c76.jpg?imwidth=1260", productId: 21 },
        { url: "https://image.hm.com/assets/hm/77/d6/77d663e52a7297c2ecf2ead4975cc32aa6d81a6d.jpg?imwidth=564", productId: 21 },

        { url: "https://image.hm.com/assets/hm/e2/23/e2236cf7ab2c09b07e81817e988c87426ecca83b.jpg?imwidth=564", productId: 22 },
        { url: "https://image.hm.com/assets/hm/2f/e8/2fe8dce14eda366a025a7c0dbead2e6616f47858.jpg?imwidth=564", productId: 22 },
        { url: "https://image.hm.com/assets/hm/c1/18/c1181a297bad814f5103944f8ee79592ecdfa3fd.jpg?imwidth=564", productId: 22 },

        { url: "https://image.hm.com/assets/hm/f6/cc/f6cc1b88474cd02c832b07d33e9253788df787a0.jpg?imwidth=564", productId: 23 },
        { url: "https://image.hm.com/assets/hm/be/2d/be2debe2af9f07e50dd611d47bb1143a43e1f647.jpg?imwidth=564", productId: 23 },
        { url: "https://image.hm.com/assets/hm/88/da/88da28a631274c970856b5f87e6ab8fc2b1c9ebf.jpg?imwidth=564", productId: 23 },

        { url: "https://image.hm.com/assets/hm/f1/fd/f1fd0d235a69920654a98cb080180c79ca105032.jpg?imwidth=564", productId: 24 },
        { url: "https://image.hm.com/assets/hm/45/1b/451b14357b864d261b8ef05d44382b2b6de87523.jpg?imwidth=564", productId: 24 },
        { url: "https://image.hm.com/assets/hm/1e/fd/1efde9761a801b6ccf89619f0f648c32712ac89c.jpg?imwidth=564", productId: 24 },

        { url: "https://image.hm.com/assets/hm/5d/96/5d9633265cc5bcf1df885a6098d6e17046d2166a.jpg?imwidth=564", productId: 25 },
        { url: "https://image.hm.com/assets/hm/af/1b/af1bc74e3dca927db3b2913d06670dc4c92da710.jpg?imwidth=564", productId: 25 },
        { url: "https://image.hm.com/assets/hm/97/ca/97cac0de70d13aff3b6e6d5756a8ff6cce45cb0d.jpg?imwidth=564", productId: 25 },

        { url: "https://image.hm.com/assets/hm/8b/5e/8b5ecf9d572abf7a14ec1743752fcd8ca4f546b7.jpg?imwidth=564", productId: 26 },
        { url: "https://image.hm.com/assets/hm/62/23/622360bf73a4e79d642103bef9e43b17db432753.jpg?imwidth=564", productId: 26 },
        { url: "https://image.hm.com/assets/hm/7b/55/7b55a803831e0d34910d6891bebbb0095d5c559b.jpg?imwidth=564", productId: 26 },

        { url: "https://image.hm.com/assets/hm/1b/0b/1b0b2b73fde5f8356c0cd6da02d082b641e69e81.jpg?imwidth=657", productId: 27 },
        { url: "https://image.hm.com/assets/hm/04/e8/04e86370a266985c38539e3a71cd1d5d1e8be2cb.jpg?imwidth=657", productId: 27 },
        { url: "https://image.hm.com/assets/hm/73/11/73110e12cc24a45ff260bec9731e021033bd6072.jpg?imwidth=564", productId: 27 },

        { url: "https://image.hm.com/assets/hm/a0/39/a039223023113e76d4b6f7d81174dc5f4216fc1c.jpg?imwidth=564", productId: 28 },
        { url: "https://image.hm.com/assets/hm/d6/cc/d6ccefc1a2da3f7523fdc2b221453844736c1236.jpg?imwidth=564", productId: 28 },
        { url: "https://image.hm.com/assets/hm/7f/4d/7f4d9d0db7abcb374e840fb97125e28f50507217.jpg?imwidth=564", productId: 28 },

        { url: "https://image.hm.com/assets/hm/df/22/df22f4e643607e294e3579a459bb35f0d53d3a79.jpg?imwidth=564", productId: 29 },
        { url: "https://image.hm.com/assets/hm/25/72/2572c54e8549bc70b0758cabbb229a423ba74e67.jpg?imwidth=564", productId: 29 },
        { url: "https://image.hm.com/assets/hm/0f/fc/0ffc63c11ba9fe089b67bf02095ed168105c76cd.jpg?imwidth=564", productId: 29 },

        { url: "https://image.hm.com/assets/hm/0f/52/0f526b204e0024cea28c4e15c1ac02282842fccc.jpg?imwidth=564", productId: 30 },
        { url: "https://image.hm.com/assets/hm/11/70/1170f1a658f677a4ccaaab0577204439c81e2b09.jpg?imwidth=564", productId: 30 },
        { url: "https://image.hm.com/assets/hm/f4/ff/f4ff98dd6a74386ce7d50a5bde727b588fff8d95.jpg?imwidth=564", productId: 30 },


      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
