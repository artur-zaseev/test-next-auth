import Top from "../components/Top";
import Calendar from "../components/Calendar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-200">
        <div className="w-10/12 mx-auto">
          <Top />
          {/* Content */}
          <div className="flex mt-5">
            {/* Sidebar */}
            <div className="w-3/12">
              <Calendar />
              <h2>Фильтр</h2>
            </div>
            {/* Content */}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
