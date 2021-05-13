import { GetServerSideProps } from 'next';
import EventsList from '../components/EventsList';
import { IEvent } from '../types';

interface IHome {
  events: IEvent[];
}

const Home: React.FC<IHome> = ({ events }) => {
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/events`);
  const events: IEvent[] = await res.json();

  if (!events) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events },
  };
};

export default Home;
