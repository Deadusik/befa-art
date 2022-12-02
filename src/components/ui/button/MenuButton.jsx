import React from 'react'
import styles from './MenuButton.module.scss'

const Button = ({ children }) => {
    return (
        <button className={styles.Button}>
            <div className={styles.MenuButton__TopRow}></div>
            <div className={styles.MenuButton__MiddleRow}></div>
            <div className={styles.MenuButton__BottomRow}></div>
        </button>
    )
}

export default Button;