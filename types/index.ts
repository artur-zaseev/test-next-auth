export interface IEvent {
  id: number;
  date: string;
  placeID: number;
  tags: Array<number>;
  event_type: Array<number>;
  title: string;
  description: string;
  image: string;
  price_from: number;
}

export interface ITag {
  id: number;
  text: string;
}

export interface IEventType {
  id: number;
  text: string;
}
