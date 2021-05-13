import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { fetchEventTags, fetchEventType } from '../helpers/fetchers';
import { IEvent } from '../types';

const EventsListItem: React.FC<IEvent> = (props) => {
  let [tags, setTags] = useState<string[]>([]);
  let [eventType, setEventType] = useState<string>('');

  useEffect(() => {
    async function getTagsText() {
      let tagsTexts = await fetchEventTags(props.tags);
      setTags(tagsTexts);
    }
    getTagsText();
  }, []);

  useEffect(() => {
    async function getEventTypeText() {
      let text = await fetchEventType(props.event_type[0]);
      setEventType(text);
    }
    getEventTypeText();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col bg-white mb-8 p-6">
        {/* TOP */}
        <div>
          {props.date} / {props.placeID}
        </div>

        {/* Title */}
        <div className="w-full flex justify-between items-center mb-3">
          <div>{props.title}</div>
          <div>от {props.price_from} руб.</div>
        </div>

        {/* Tags */}
        <div className="flex justify-between">
          <div className="flex">
            {tags.length &&
              tags.map((tag) => (
                <div key={tag} className="mr-3 mb-3 border border-gray-500 rounded-full px-3">
                  {tag}
                </div>
              ))}
          </div>
          <div>{eventType}</div>
        </div>

        {/* Text */}
        <div className="mb-3">{props.description}</div>

        {/* Image */}
        <div>
          <img className="block w-full" src="/img/kiss.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { xxxxxxxxxxxxxxxxxxx: 'Hellow' },
  };
};

export default EventsListItem;
