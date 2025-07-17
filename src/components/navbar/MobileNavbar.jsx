import { useContext, useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import LanguageContext from '../../context/languageContext'
//components
import Logo from '../ui/logo/Logo'
import MenuButton from '../ui/button/MenuButton'
import Dropdown from '../ui/dropdown/Dropdown'
//styles
import styles from './MobileNavbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'
import logoStyles from '../ui/logo/Logo.module.scss'
// utils
import { ABOUT_ID, CONTACTS_ID, languages, PORTFOLIO_ID } from '../../utils/constants'
import { scrollToTop } from '../../utils/functions'

const MobileNavbar = () => {
    useTranslation()
    const { language, setLanguage } = useContext(LanguageContext)
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onLanguageChange = (e) => {
        const lngCode = e.target.value.toLowerCase()

        if (lngCode) {
            setLanguage(lngCode)
            localStorage.setItem('lng', lngCode)
        }
    }

    const onLinkClick = () => {
        setMenuIsOpen(false)
    }

    const onHomeClick = () => {
        onLinkClick()
        scrollToTop()
    }

    return (
        <div className={styles.Navbar}>
            <div className={styles.Navbar__Logo}>
                <Logo className={logoStyles.Logo_Small} />
            </div>
            <div className={styles.Navbar__Button}>
                {
                    menuIsOpen &&
                    <Dropdown
                        selectedValue={language}
                        onChange={onLanguageChange}
                        options={
                            languages.map(language => {
                                return {
                                    key: language,
                                    name: language.toUpperCase(),
                                    value: language
                                }
                            })
                        } />
                }
                <MenuButton isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </div>
            <CSSTransition
                in={menuIsOpen}
                timeout={500}
                classNames='show-top'>
                <div className={styles.Navbar__Links}>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onHomeClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')}>
                            <Trans i18nKey="navbar.home" />
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + PORTFOLIO_ID}>
                            <Trans i18nKey="navbar.portfolio" />
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + ABOUT_ID}>
                            <Trans i18nKey="navbar.about" />
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + CONTACTS_ID}>
                            <Trans i18nKey="navbar.contacts" />
                        </a>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default MobileNavbar;