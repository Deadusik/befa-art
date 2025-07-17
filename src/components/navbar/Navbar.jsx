import { useContext } from 'react'
import LanguageContext from '../../context/languageContext'
//components
import Logo from '../ui/logo/Logo'
import Dropdown from '../ui/dropdown/Dropdown'
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './Navbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'
// utils
import { ABOUT_ID, CONTACTS_ID, PORTFOLIO_ID } from '../../utils/constants'
import { scrollToTop } from '../../utils/functions'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const languages = ['en', 'de'];
    const { language, setLanguage } = useContext(LanguageContext)
    const { t } = useTranslation()

    console.log(language)

    const onLanguageChange = (e) => {
        const lngCode = e.target.value.toLowerCase()

        if (lngCode) {
            setLanguage(lngCode)
            localStorage.setItem('lng', lngCode)
        }
    }

    return (
        <div className={styles.Navbar}>
            <Wrapper>
                <div className={styles.Navbar__Links}>
                    <a className={linkStyles.Link} onClick={scrollToTop}>{t("navbar.home")}</a>
                    <a className={linkStyles.Link} href={'#' + PORTFOLIO_ID}>{t("navbar.portfolio")}</a>
                    <Logo />
                    <a className={linkStyles.Link} href={'#' + ABOUT_ID}>{t("navbar.about")}</a>
                    <a className={linkStyles.Link} href={'#' + CONTACTS_ID}>{t("navbar.contacts")}</a>
                </div>
                <Dropdown
                    selectedValue={language}
                    onChange={onLanguageChange}
                    options={
                        languages.map(lng => {
                            return {
                                key: lng,
                                name: lng.toUpperCase(),
                                value: lng
                            }
                        })
                    } />
            </Wrapper>
        </div>
    )
}

export default Navbar;