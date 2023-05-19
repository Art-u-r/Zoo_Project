import express from 'express';
import { Price, Animal, Gallery } from '../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { animalname, description, mainImg } = req.body;
    const newAnimal = await Animal.create({
      animalname,
      description,
      mainImg,
    });
    res.json(newAnimal);
  } catch (error) {
    res.sendStatus(401);
  }
});
router.post('/photo/:id', async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  try {
    await Gallery.create({ image: req.body.image, animal_id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
});

router.patch('/price', async (req, res) => {
  const checkValue = Object.values(req.body);
  if (checkValue[0] === '') {
    return res.status(401);
  }
  const newParam = req.body;
  await Price.update(newParam, { where: { id: 1 } });
  const prices = await Price.findAll();
  return res.json(prices);
});

router.delete('/animals/:id', async (req, res) => {
  try {
    await Animal.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.patch('/animals/:id', async (req, res) => {
  try {
    await Animal.update(
      {
        animalname: req.body.animalname,
        description: req.body.description,
        mainImg: req.body.mainImg,
      },
      { where: { id: req.params.id } },
    );
    const animal = await Animal.findOne({ where: { id: req.params.id } });
    res.json(animal);
  } catch (error) {
    console.log(error);
  }
});

export default router;
