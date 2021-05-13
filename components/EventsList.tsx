import EventsListItem from './EventsListItem';
import { IEvent } from '../types';

interface IEventsList {
  events: IEvent[];
}

const EventsList: React.FC<IEventsList> = ({ events }) => {
  if (!events.length) return null;

  return (
    <>
      {events.map((ev: IEvent) => (
        <EventsListItem key={ev.id} {...ev} />
      ))}
    </>
  );
};

export default EventsList;
