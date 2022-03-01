const users = [
  {
    id: '1',
    name: 'user1',
  },
  {
    id: '2',
    name: 'user2',
  },
  {
    id: '3',
    name: 'user3',
  },
];

export default function handler(req, res) {
  console.log({
    'req.method': req.method,
    'req.body': req.body,
    'req.query': req.query,
  });
  if (req.method === 'POST') {
    const user = users.filter(({ id }) => id === req.query.id);
    return res.status(200).json({ user });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ users });
  }

  res.status(400).json({ message: 'no data found' });
}
