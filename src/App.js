//components
import Navbar from "./components/navbar/Navbar"
import MobileNavbar from './components/navbar/MobileNavbar'
import AppRouter from './router/AppRouter'
import MediaQuery from 'react-responsive'
//styles
import styles from './styles/App.scss'
import './styles/fonts.scss'

function App() {
  return (
    <div className={styles.App}>
      <MediaQuery minWidth={700}>
        <Navbar />
      </MediaQuery>
      <MediaQuery maxWidth={699}>
        <MobileNavbar />
      </MediaQuery>
      <AppRouter />
    </div>
  );
}

export default App;
