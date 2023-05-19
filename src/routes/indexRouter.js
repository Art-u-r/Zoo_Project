import express from 'express';
import { Animal, Price, Gallery } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/gallery', async (req, res) => {
  const animals = await Animal.findAll({ order: [['updatedAt', 'DESC']] });
  const initState = { animals };
  res.render('Layout', initState);
});
router.get('/admin', (req, res) => {
  res.render('Layout');
});

router.get('/gallery/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const animalAndGallery = await Animal.findOne({
      where: {
        id,
      },
      include: Gallery,
    });
    const initState = { animalAndGallery };
    // console.log(animalAndGallery.dataValues.id);
    res.render('Layout', initState);
  } catch (error) {
    res.sendStatus(401);
  }
});

router.get('/admin/animals', async (req, res) => {
  const animals = await Animal.findAll({
    include: { model: Gallery },
    order: [['updatedAt', 'DESC']],
  });
  const initState = { animals };
  res.render('Layout', initState);
});

router.get('/price', async (req, res) => {
  const prices = await Price.findAll();
  const initState = { prices };
  res.render('Layout', initState);
});

router.get('/admin/price', async (req, res) => {
  const prices = await Price.findAll();
  const initState = { prices };
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/gallery/:id', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;
