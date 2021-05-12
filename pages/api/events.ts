import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../database';

const EventsHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  let data = db.get('posts').value();
  res.status(200).json({ data });
};

export default EventsHandler;
