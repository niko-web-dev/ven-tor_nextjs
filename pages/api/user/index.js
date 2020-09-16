import nextConnect from 'next-connect';
import middleware from '../../../server/middlewares/middleware';
import { extractUser } from '../../../server/lib/api-helpers';

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => res.json({ user: extractUser(req) }));
// console.log(handler)

handler.patch(async (req, res) => {
  if (!req.user) {
    req.status(401).end();
    return;
  }
  const { name, bio } = req.body;
  await req.db.collection('users').updateOne(
      { _id: req.user._id },
      {
        $set: {
          ...(name && { name }),
          bio: bio || '',
        },
      },
  );
  res.json({ user: { name, bio } });
});

export default handler;