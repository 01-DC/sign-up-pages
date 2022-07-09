import '../styles/globals.css';
import '../styles/animations.css';
import { HomeProvider } from '../HomeContext';
const App = ({ Component, pageProps }) => {
  return (
    <HomeProvider>
      <Component {...pageProps} />
    </HomeProvider>
  );
};

export default App;
