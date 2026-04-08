import "../styles/globals.scss";
import Cursor from "../components/Cursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
