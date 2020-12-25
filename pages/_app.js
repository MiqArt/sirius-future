import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="main container">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
