'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Galleries',
      [
        {
          image: 'https://www.zoopark-rostov.ru/images/givotnye/zebrachapmana/zebry.JPG',
          animal_id: 2,
        },
        {
          image: 'https://www.zoo48.ru/assets/images/resources/967/30cf6b924c897d547739b3e33c5a5c6bb35fc29c.jpg',
          animal_id: 2,
        },
        {
          image: 'https://e-bliskoprzyrody.pl/wp-content/uploads/2019/07/po-co-zebrom-paski-stadko.jpg',
          animal_id: 2,
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/%D0%9B%D0%B5%D0%B2_%D0%B2_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC_%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA%D0%B5.jpg',
          animal_id: 1,
        },
        {
          image: 'https://www.zoo22.ru/upload/iblock/3f2/3f2be90f0bd44d72b86060cfa6c4f54e.jpg',
          animal_id: 1,
        },
        {
          image: 'https://sib.fm/storage/article/July2022/HVEkYKRfSqEfpO0FCjMXrE86Mj7ZRq-zDO0a4rOcZ7lZgdilFk78izO1XuF6ApRHP1UXSIcTwvfRa8_rQf2_wooj.jpg',
          animal_id: 1,
        },
        {
          image: 'https://www.zoopicture.ru/assets/2014/03/129.jpg',
          animal_id: 3,
        },
        {
          image: 'https://aif-s3.aif.ru/images/025/587/e98b746bb3463d4ceac87cd0e701d75b.png',
          animal_id: 3,
        },
        {
          image: 'https://don24.ru/uploads/2021/04/%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5-rfPwR4d6QZTskslYY84VFUqSi35l_vle/%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C-6-wP49Cu5y_7UlNSzcRb0DSlQZGaU_D5G3.jpg',
          animal_id: 3,
        },
        {
          image: 'https://i.travel.ru/images2/2016/03/object253185/elef.jpg',
          animal_id: 4,
        },
        {
          image: 'https://images.freeimages.com/images/large-previews/418/elephants-in-schoennbrunn-zoo-1507162.jpg',
          animal_id: 4,
        },
        {
          image: 'https://znaj.ua/crops/0b3c4c/620x0/1/0/2016/07/30/54325.jpg',
          animal_id: 4,
        },
        {
          image: 'https://cdnn1.img.sputnik-georgia.com/img/23918/68/239186800_370:0:1696:1326_1920x0_80_0_0_0ba784bcfac0a74266603dbace5067c4.jpg',
          animal_id: 5,
        },
        {
          image: 'https://ukranews.com/upload/news/2017/09/28/59cd26541f6ab------------------------_1200.jpg',
          animal_id: 5,
        },
        {
          image: 'https://imgtest.mir24.tv/uploaded/images/crops/2022/June/870x489_0x63_detail_crop_20220609115657_78252a23_296f318cc7bc23f4cb623dfe25fd32a5786d8e3e67958034d07f1f014990dbef.jpg',
          animal_id: 5,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galleries', null, {});
  },
};
