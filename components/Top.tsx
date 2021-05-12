import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi';

const Top: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-gray-400 py-3 px-3">
      <Link href="/">
        <a className="uppercase">Bilego</a>
      </Link>

      <form action="">
        <input type="text" placeholder="поиск" />
      </form>

      <div>Санкт-Петербург</div>

      <div className="text-2xl">
        <Link href="/account">
          <a>
            <BiUserCircle />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Top;
