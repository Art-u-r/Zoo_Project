import express from 'express';
import { Animal } from '../../db/models'

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/gallery', async (req, res) => {
  const animals = await Animal.findAll();
  const initState = { animals };
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
