import { signOut, getSession } from 'next-auth/client';
import { ISession } from '../../types';

const Admin: React.FC<ISession> = ({ session }) => {
  return (
    <>
      <h1>Админ панель</h1>

      <div className="my-6">
        <button className="bg-red-300 text-gray-800 border border-gray-600 px-3 py-2 rounded-md" onClick={() => signOut()}>
          Выйти
        </button>
      </div>

      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (session.user.email !== process.env.ADMIN_EMAIL) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Admin;
