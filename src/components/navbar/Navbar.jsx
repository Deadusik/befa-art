import { Link } from 'react-router-dom'
//components
import Logo from '../ui/logo/Logo'
import Dropdown from '../ui/dropdown/Dropdown'
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './Navbar.module.scss'
import linkStyles from '../ui/link/Link.module.scss'

const Navbar = () => {
    const languages = ['eng', 'deu'];

    return (
        <div className={styles.Navbar}>
            <Wrapper>
                <div className={styles.Navbar__Links}>
                    <Link className={linkStyles.Link} to='/'>Home</Link>
                    <Link className={linkStyles.Link} to='/portfolio'>My portfolio</Link>
                    <Logo />
                    <Link className={linkStyles.Link} to='/about'>About me</Link>
                    <Link className={linkStyles.Link} to='/contacts'>Contacts</Link>
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