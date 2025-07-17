import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageContext from "./context/languageContext"
import './i18n'
//components
import Navbar from "./components/navbar/Navbar"
import MobileNavbar from './components/navbar/MobileNavbar'
import AppRouter from './router/AppRouter'
import MediaQuery from 'react-responsive'
//styles
import styles from './styles/App.scss'
import './styles/fonts.scss'

function App() {
  const [language, setLanguage] = useState('en')
  const { i18n } = useTranslation()

  useEffect(() => {
    const lngCode = localStorage.getItem('lng')

    if (lngCode)
      setLanguage(lngCode)
  }, [])

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, setLanguage])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={styles.App}>
        <MediaQuery minWidth={800}>
          <Navbar />
        </MediaQuery>
        <MediaQuery maxWidth={799}>
          <MobileNavbar />
        </MediaQuery>
        <AppRouter />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
