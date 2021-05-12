import { API_HOST } from '../options';
import { IEvent, IEventType, ITag } from '../types';

export const fetchEvents = async (): Promise<IEvent[]> => {
  const response = await fetch(`${API_HOST}/events`);
  const data: IEvent[] = await response.json();
  return data;
};

export const fetchEventTags = async (tags: number[]): Promise<string[]> => {
  let params = ``;

  tags.forEach((tag, index) => {
    index <= tags.length ? (params += `id=${tag}&`) : (params += `id=${tag}`);
  });

  const response = await fetch(`${API_HOST}/tags?${params}`);
  const data: ITag[] = await response.json();

  return data.map((i: ITag) => i.text);
};

export const fetchEventType = async (id: number): Promise<string> => {
  const response = await fetch(`${API_HOST}/event_types?id=${id}`);
  const data: IEventType[] = await response.json();
  return data[0].text;
};
