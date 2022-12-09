import React from 'react'
import styles from './InfoButton.module.scss'
import iconInfo from '../../../icons/info.svg'

const InfoButton = ({ onClick, isActive }) => {
    return (
        <button onClick={onClick} className={styles.InfoButton}>
            {isActive ?
                <div className={styles.InfoButton__Cross}></div>
                :
                <img className={styles.InfoButton__Icon} src={iconInfo} alt='info' />
            }
        </button>
    )
}

export default InfoButton;