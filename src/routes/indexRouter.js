import express from 'express';
import { Animal } from '../../db/models';

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

router.get('/admin/prices', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/gallery/:id', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;
