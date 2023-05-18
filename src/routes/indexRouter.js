import express from 'express';
import { Animal, Gallery } from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/gallery', async (req, res) => {
  const animals = await Animal.findAll();
  const initState = { animals };
  res.render('Layout', initState);
});

router.get('/gallery/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const animalAndGallery = await Animal.findOne({
      where: {
        id
      }, 
      include: Gallery
    });
    const initState = { animalAndGallery };
  // console.log(animalAndGallery.dataValues.id);
    res.render('Layout', initState);
  } catch (error) {
    res.sendStatus(401);
  }
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

export default router;
