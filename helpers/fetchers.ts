import { API_HOST } from '../options';

export const fetchEvents = async () => {
  const response = await fetch(`${API_HOST}/events`);
  const data = await response.json();
  return data;
};
