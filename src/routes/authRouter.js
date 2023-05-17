import express from 'express';
import bcrypt from 'bcrypt';
import { Admin } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) return res.sendStatus(400);

  const foundUser = await Admin.findOne({ where: { email } });

  if (!foundUser) return res.sendStatus(400);

  if (!(await bcrypt.compare(password, foundUser.password))) return res.sendStatus(401);

  req.session.user = foundUser;

  return res.sendStatus(200);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

export default authRouter;
