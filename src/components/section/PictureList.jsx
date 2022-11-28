import React from 'react'
//components
import Title from '../ui/title/Title'
//styles
import styles from './PictureList.module.scss'
import TitleStyles from '../ui/title/Title.module.scss'

const PictureList = () => {
    return (
        <div className={styles.PictureList}>
            <Title>My portfolio</Title>
        </div>
    )
}

export default PictureList;