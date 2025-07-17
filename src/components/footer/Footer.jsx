import { Trans, useTranslation } from 'react-i18next';
//components
import { CONTACTS_ID } from '../../utils/constants';
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './Footer.module.scss'
// utils
import { scrollToTop } from '../../utils/functions';

const Footer = () => {
    useTranslation()

    return (
        <div id={CONTACTS_ID} className={styles.Footer}>
            <Wrapper>
                <div className={styles.Footer__Content}>
                    <h2 className={styles.Footer__Title}>
                        <Trans i18nKey="contacts.title" />
                    </h2>
                    <div className={styles.Footer__Contacts}>
                        <p className={styles.Footer__ContactsItem}><Trans i18nKey="contacts.phone" />: +015207940490</p>
                        <p className={styles.Footer__ContactsItem}><Trans i18nKey="contacts.email" />: befaart@gmx.de</p>
                        <p className={styles.Footer__ContactsItem}><Trans i18nKey="contacts.instagram" />: @befaar</p>
                    </div>
                    <div className={styles.Footer__Button}
                        onClick={scrollToTop}>
                        <Trans i18nKey="contacts.to-top" />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer;