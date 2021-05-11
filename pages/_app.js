import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";

import MainLayout from "../layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
