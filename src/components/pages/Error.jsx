import React from 'react'
import { Trans } from 'react-i18next';
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.Error}>
            <h1>
                <Trans i18nKey="errorpage" />
            </h1>
        </div>
    );
}

export default Error;