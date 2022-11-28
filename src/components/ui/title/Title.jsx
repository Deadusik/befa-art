import React from 'react'
import styles from './Title.module.scss'

const Title = ({ children, styleModifier }) => {
    return (
        <div className={[styles.Title, styleModifier].join(' ')}>
            <h2 className={styles.Title__Name}>{children}</h2>
            <hr className={styles.Title__Line} />
        </div>
    )
}

export default Title;