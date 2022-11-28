//components
import Navbar from "./components/navbar/Navbar"
import AppRouter from './router/AppRouter'
//styles
import styles from './styles/App.scss'
import fonts from './styles/fonts.scss'


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
