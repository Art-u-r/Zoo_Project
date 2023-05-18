import express from 'express';
import { Animal } from '../../db/models';

const router = express.Router();

router.patch('/animals/:id', async (req, res) => {
  console.log(req.params);
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
