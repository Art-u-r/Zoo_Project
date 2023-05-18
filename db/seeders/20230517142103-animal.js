'use strict';
const bcrypt = require ('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          animalname: 'Лев',
          description: 'Лев (лат. Panthera leo) — вид хищных млекопитающих, один из пяти представителей рода пантер (Panthera), относящегося к подсемейству больших кошек в составе семейства кошачьих. Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг.',
          mainImg: "https://avatars.dzeninfra.ru/get-zen_doc/4340862/pub_60d8e94260cf8a72e059afed_60d8e98360cf8a72e05a2c9b/scale_1200",
        },
        {
          animalname: 'Зебра',
          description: 'Подрод рода лошади, включающий виды бурчеллова зебра, зебра Греви и горная зебра. Гибридные формы между зебрами и домашними лошадьми называют зеброидами, между зебрами и ослами — зебрулами. Зебры живут маленькими группами, состоящими из самок с детёнышами и одного жеребца.',
          mainImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/1200px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg"
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
        {
          animalname: 'Обезьяна',
          description: 'группа млекопитающих из отряда приматов. В биологической систематике название «обезьяны» может применяться по отношению ко всем представителям инфраотряда Simiiformes или подотряда Haplorhini.',
          mainImg: "https://image.mel.fm/i/Z/ZAMXqz2DyF/1200.jpg",
        },
      ],
      {},
    );
    await queryInterface.bulkInsert('Admins', [
      {
        name: 'Admin',
        email: "aa@bb.cc",
        password: await bcrypt.hash("123", 6)
      },
    ],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
