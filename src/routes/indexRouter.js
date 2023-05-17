import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/gallery', (req, res) => {
  const initState = { animals: [{id:1, animalname:'A lion', description: 'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India.', mainImg:'https://www.gannett-cdn.com/media/2022/03/16/USATODAY/usatsports/imageForEntry5-ODq.jpg'}, {id: 2, animalname:'Rhinoceros', description:' Two of the extant species are native to Africa, and three to South and Southeast Asia.', mainImg:'https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg'}]};
  res.render('Layout', initState);
});

router.get('/gallery/:id', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

export default router;
