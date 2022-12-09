import React from 'react'
import styles from './MenuButton.module.scss'

const MenuButton = ({ onClick, isActive }) => {
    return (
        <button onClick={onClick} className={styles.MenuButton}>
            {isActive ?
                <div className={styles.MenuButton__Cross}></div>
                :
                <div className={styles.MenuButton__Rows}>
                    <div className={styles.MenuButton__TopRow}></div>
                    <div className={styles.MenuButton__MiddleRow}></div>
                    <div className={styles.MenuButton__BottomRow}></div>
                </div>
            }
        </button>
    )
}

export default MenuButton;