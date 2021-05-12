import Top from '../components/Top';
import Calendar from '../components/Calendar';
import Filter from '../components/Filter';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-200">
        <div className="w-10/12 mx-auto">
          <Top />
          {/* Content */}
          <div className="flex justify-between mt-5">
            {/* Sidebar */}
            <div className="w-3/12">
              <Calendar />
              <Filter />
            </div>
            {/* Content */}
            <div className="w-9/12">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
