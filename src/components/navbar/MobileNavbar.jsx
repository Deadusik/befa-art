import React from 'react'
import { Link } from 'react-router-dom'
//components
import Logo from '../ui/logo/Logo'
import MenuButton from '../ui/button/MenuButton'
//styles
import styles from './MobileNavbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'


const MobileNavbar = () => {


    return (
        <div className={styles.Navbar}>
            <Logo />
            <MenuButton />
            <div className={styles.Navbar__Links}>
                <Link className={linkStyles.Link} to='/'>Home</Link>
                <Link className={linkStyles.Link} to='/'>My portfolio</Link>
                <Link className={linkStyles.Link} to='/'>About me</Link>
                <Link className={linkStyles.Link} to='/'>Contacts</Link>
            </div>
        </div>
    )
}

export default MobileNavbar;