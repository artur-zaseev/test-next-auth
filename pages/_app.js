import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';

import { Provider } from 'next-auth/client';
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;
