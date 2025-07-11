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


const MobileNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onLinkClick = () => {
        setMenuIsOpen(false)
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
                        <Link onClick={(_) => onLinkClick()} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} to='/'>Home</Link>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <Link onClick={(_) => onLinkClick()} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} to='/portfolio'>My portfolio</Link>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <Link onClick={(_) => onLinkClick()} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} to='/about-me'>About me</Link>
                    </div>
                    <div className={styles.Navbar__Link}>
                        <Link onClick={(_) => onLinkClick()} className={[linkStyles.Link, linkStyles.Link_Large].join(' ')} to='/contacts'>Contacts</Link>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default MobileNavbar;