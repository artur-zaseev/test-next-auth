import { NextApiRequest, NextApiResponse } from 'next';
import { getEventById } from './../../../database/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getEventById(1));
};
