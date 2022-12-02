//components
import Navbar from "./components/navbar/Navbar"
import MobileNavbar from './components/navbar/MobileNavbar'
import AppRouter from './router/AppRouter'
import MediaQuery from 'react-responsive'
//styles
import styles from './styles/App.scss'
import fonts from './styles/fonts.scss'


function App() {
  return (
    <div className={styles.App}>
      <MediaQuery minWidth={414}>
        <Navbar />
      </MediaQuery>
      <MediaQuery maxWidth={414}>
        <MobileNavbar />
      </MediaQuery>
      <AppRouter />
    </div>
  );
}

export default App;
