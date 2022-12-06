import React from 'react'
//components
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <Wrapper>
                <div className={styles.Footer__Content}>
                    <h2 className={styles.Footer__Title}>My contacts</h2>
                    <div className={styles.Footer__Contacts}>
                        <p className={styles.Footer__ContactsItem}>Phone: +015207940490</p>
                        <p className={styles.Footer__ContactsItem}>Email: befaart@gmx.de</p>
                        <p className={styles.Footer__ContactsItem}>Instagram: @befaar</p>
                    </div>
                    <div className={styles.Footer__Button}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>To top</div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer;