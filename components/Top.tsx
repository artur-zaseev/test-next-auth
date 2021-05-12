import Link from 'next/link';
import { BiUserCircle } from 'react-icons/bi';
import { signIn, useSession } from 'next-auth/client';

const Top: React.FC = () => {
  let [session] = useSession();

  return (
    <div className="flex justify-between items-center bg-gray-400 py-3 px-3">
      <Link href="/">
        <a className="uppercase">Bilego</a>
      </Link>

      <form>
        <input type="text" placeholder="поиск" className="px-3 py-1" />
      </form>

      <div>Санкт-Петербург</div>

      {!session && (
        <button className="w-8 h-8" onClick={() => signIn('auth0')}>
          <BiUserCircle className="block w-full h-full" />
        </button>
      )}

      {session && (
        <Link href="/account">
          <a>{session.user.email}</a>
        </Link>
      )}
    </div>
  );
};

export default Top;
