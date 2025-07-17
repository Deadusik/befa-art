import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
//components
import Logo from '../ui/logo/Logo'
import MenuButton from '../ui/button/MenuButton'
//styles
import styles from './MobileNavbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'
import logoStyles from '../ui/logo/Logo.module.scss'
// utils
import { ABOUT_ID, CONTACTS_ID, PORTFOLIO_ID } from '../../utils/constants'
import { scrollToTop } from '../../utils/functions'


const MobileNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

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
                <MenuButton isActive={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </div>
            <CSSTransition
                in={menuIsOpen}
                timeout={500}
                classNames='show-top'>
                <div className={styles.Navbar__Links}>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onHomeClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')}>
                            Home
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + PORTFOLIO_ID}>
                            My portfolio
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + ABOUT_ID}>
                            About me
                        </a>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <a onClick={onLinkClick} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} href={'#' + CONTACTS_ID}>
                            Contacts
                        </a>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default MobileNavbar;