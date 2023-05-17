import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) res.sendStatus(400);

  const foundUser = await User.findOne({ where: { email } });

  if (!foundUser) res.sendStatus(400);

  if (!(await bcrypt.compare(password, foundUser.password))) res.sendStatus(401);

  req.session.user = foundUser;

  res.sendStatus(200);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

export default authRouter;
