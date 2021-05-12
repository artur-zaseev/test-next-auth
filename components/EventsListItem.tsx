import { IEvent } from '../types';

const EventsListItem: React.FC<IEvent> = (props) => {
  return <div className="">{props.title}</div>;
};

export default EventsListItem;
