import { NextApiRequest, NextApiResponse } from 'next';
import { ITag } from '../../../types';
import { getTags } from './../../../database/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query.id);
  let queryTags: string[] = Array.from(req.query.id);
  let allTags: ITag[] = await getTags();
  let result: string[] = [];

  allTags.forEach((tag: ITag) => {
    if (queryTags.includes(String(tag.id))) {
      result.push(tag.text);
    }
  });

  res.status(200).json(result);
};
