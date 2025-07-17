//components
import Logo from '../ui/logo/Logo'
import Dropdown from '../ui/dropdown/Dropdown'
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './Navbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'
// utils
import { ABOUT_ID, CONTACTS_ID, HOME_ID, PORTFOLIO_ID } from '../../utils/constants'
import { scrollToTop } from '../../utils/functions'

const Navbar = () => {
    const languages = ['eng', 'deu'];

    return (
        <div className={styles.Navbar}>
            <Wrapper>
                <div className={styles.Navbar__Links}>
                    <a className={linkStyles.Link} onClick={scrollToTop}>Home</a>
                    <a className={linkStyles.Link} href={'#' + PORTFOLIO_ID}>My portfolio</a>
                    <Logo />
                    <a className={linkStyles.Link} href={'#' + ABOUT_ID}>About me</a>
                    <a className={linkStyles.Link} href={'#' + CONTACTS_ID}>Contacts</a>
                </div>
                <Dropdown
                    options={
                        languages.map(language => {
                            return {
                                key: language,
                                name: language.toUpperCase(),
                                value: language
                            }
                        })
                    } />
            </Wrapper>
        </div>
    )
}

export default Navbar;