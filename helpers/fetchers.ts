import { IEvent, IEventType, ITag } from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchEvents = async (): Promise<IEvent[]> => {
  const data: IEvent[] = await fetcher(`/api/events`);
  return data;
};

export const fetchEventTags = async (tags: number[]): Promise<string[]> => {
  let params = ``;

  tags.forEach((tag, index) => {
    index <= tags.length ? (params += `id=${tag}&`) : (params += `id=${tag}`);
  });

  const data: ITag[] = await fetcher(`/api/tags?${params}`);
  return data.map((i: ITag) => i.text);
};

export const fetchEventType = async (id: number): Promise<string> => {
  const data: IEventType[] = await fetcher(`/api/event_types?id=${id}`);
  return data[0].text;
};
