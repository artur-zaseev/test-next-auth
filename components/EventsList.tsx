import { useEffect, useState } from 'react';
import EventsListItem from './EventsListItem';
import { IEvent } from '../types';
import { fetchEvents } from '../helpers/fetchers';

const EventsList: React.FC = () => {
  let [events, setEvents] = useState<IEvent[] | []>([]);

  useEffect(() => {
    async function getEvents() {
      let data: IEvent[] = await fetchEvents();
      setEvents(data);
    }

    getEvents();
  }, []);

  return <>{events.length && events.map((ev: IEvent) => <EventsListItem key={ev.id} {...ev} />)}</>;
};

export default EventsList;
