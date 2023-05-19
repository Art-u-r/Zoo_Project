import express from 'express';
import { Animal, Price } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/gallery', async (req, res) => {
  const animals = await Animal.findAll();
  const initState = { animals };
  res.render('Layout', initState);
});
router.get('/admin', (req, res) => {
  res.render('Layout');
});

router.get('/admin/animals', async (req, res) => {
  const animals = await Animal.findAll();
  const initState = { animals };
  res.render('Layout', initState);
});

router.get('/price', async (req, res) => {
  const prices = await Price.findAll();
  const initState = {prices}
  res.render('Layout', initState);
});

router.get('/admin/price', async (req, res) => {
  const prices = await Price.findAll();
  const initState = {prices}
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
