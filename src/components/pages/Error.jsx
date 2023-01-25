import React from 'react'
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.Error}>
            <h1>Error, page does not exist.</h1>
        </div>
    );
}

export default Error;