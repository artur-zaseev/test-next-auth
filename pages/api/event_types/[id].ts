import { NextApiRequest, NextApiResponse } from 'next';
import { getEventType } from './../../../database/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  res.status(200).json(await getEventType(id));
};
