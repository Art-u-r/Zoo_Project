'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Animal',
      [
        {
          animalname: 'Лев',
          description: 'Лев (лат. Panthera leo) — вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек в составе семейства кошачьих. Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг.',
          mainImg: "https://avatars.dzeninfra.ru/get-zen_doc/4340862/pub_60d8e94260cf8a72e059afed_60d8e98360cf8a72e05a2c9b/scale_1200",
        },
        {
          animalname: 'Зебра',
          description: 'Подрод рода лошади, включающий виды бурчеллова зебра, зебра Греви и горная зебра. Гибридные формы между зебрами и домашними лошадьми называют зеброидами, между зебрами и ослами — зебрулами. Зебры живут маленькими группами, состоящими из самок с детёнышами и одного жеребца.',
          mainImg: "https://img.tsn.ua/cached/825/tsn-6fc5c486b67f33b84a28d75a8717b561/thumbs/1200x630/76/6c/3d86641a01629351b6877cbdbdb66c76.jpeg",
        },
        {
          animalname: 'Медведь',
          description: 'Семейство млекопитающих отряда хищных. Отличаются от других представителей псообразных более коренастым телосложением. Медведи всеядны, хорошо лазают и плавают, быстро бегают, могут стоять и проходить короткие расстояния на задних лапах.',
          mainImg: "https://www.belta.by/images/storage/news/with_archive/2018/000029_1527081193_303870_big.jpg",
        },
        {
          animalname: 'Слон',
          description: 'семейство класса млекопитающих из отряда хоботных. В настоящее время к этому семейству относятся 3 ныне живущих вида. Африканские саванные слоны — наиболее крупные наземные млекопитающие.',
          mainImg: "https://icdn.lenta.ru/images/2023/04/27/10/20230427100832007/wide_1c627ee4cbad8582cc2668cb1797a780.jpg",
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animal', null, {});
  },
};
