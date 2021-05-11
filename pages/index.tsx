import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href="/rooms/1">
        <a className="bg-green-600 px-5 py-3 shadow text-white">
          Перейти в чат
        </a>
      </Link>
    </div>
  );
};

export default Home;
