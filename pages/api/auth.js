import nextConnect from 'next-connect';
import middleware from '../../server/middlewares/middleware';
import passport from '../../server/lib/passport';
import { extractUser } from '../../server/lib/api-helpers';

const handler = nextConnect();

handler.use(middleware);

handler.post(passport.authenticate('local'), (req, res) => {
  // return our user object
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;