import React, { useState } from 'react'
import styles from './MenuButton.module.scss'

const Button = ({ onClick }) => {
    const [isActive, setIsActive] = useState(true);
    const onBtnClick = () => {
        setIsActive(!isActive);
        onClick();
    }

    return (
        <button onClick={onBtnClick} className={styles.MenuButton}>
            {isActive ?
                <div className={styles.MenuButton__Rows}>
                    <div className={styles.MenuButton__TopRow}></div>
                    <div className={styles.MenuButton__MiddleRow}></div>
                    <div className={styles.MenuButton__BottomRow}></div>
                </div>
                :
                <div className={styles.MenuButton__Cross}></div>
            }
        </button>
    )
}

export default Button;