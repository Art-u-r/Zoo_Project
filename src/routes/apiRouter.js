import express from 'express';
import { Price } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.patch('/price', async (req, res) => {
  const checkValue = Object.values(req.body)
  if (checkValue[0] === '') {
    return res.status(401);
  }
  const newParam = req.body;
  await Price.update(newParam, { where: { id: 1 } });
  const prices = await Price.findAll();
  return res.json(prices);
});

export default router;
