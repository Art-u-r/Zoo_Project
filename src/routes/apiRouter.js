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

export default router;
