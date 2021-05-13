import { NextApiRequest, NextApiResponse } from 'next';
import { getEvents } from './../../../database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getEvents());
};
