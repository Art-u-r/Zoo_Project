import express from 'express';
import { Price, Animal } from '../../db/models';

const router = express.Router();

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

router.post('/', async (req, res) => {
  try {
    const { animalname, description, mainImg } = await req.body;
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

router.delete('/animals/:id', async (req, res) => {
  try {
    await Animal.destroy(
      { where: { id: req.params.id } },
    );
      res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default router;
