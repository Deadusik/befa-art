import React from 'react'
import styles from './SideTitle.module.scss'

const SideTitle = ({ children, isLeftSide = true }) => {
    return (
        <div>
            {
                isLeftSide ?
                    <div className={styles.Title_TitleLeft}>
                        <h2 className={styles.Title_TitleLeft__Name}>{children}</h2>
                        <hr className={styles.Title_TitleLeft__Line} />
                    </div>
                    :
                    <div className={styles.Title_TitleRight}>
                        <h2 className={styles.Title_TitleRight__Name}>{children}</h2>
                        <hr className={styles.Title_TitleRight__Line} />
                    </div>
            }
        </div>
    )
}

export default SideTitle;