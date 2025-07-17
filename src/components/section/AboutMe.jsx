import React from 'react'
import { useTranslation, Trans } from 'react-i18next'
//components
import SideTitle from '../ui/title/SideTitle'
import Picture from '../ui/picture/Picture'
//styles
import styles from './AboutMe.module.scss'
import pictureStyles from '../ui/picture/Picture.module.scss'
//imgs
import mainImg from '../../imgs/about_img.png'
// utils
import { ABOUT_ID } from '../../utils/constants'

const AboutMe = () => {
    useTranslation()

    return (
        <div id={ABOUT_ID} className={styles.AboutMe}>
            <SideTitle isLeftSide={false}>
                <Trans i18nKey="about.title" />
            </SideTitle>
            <div className={styles.AboutMe__Content}>
                <div className={styles.AboutMe__PictureContainer}>
                    <Picture
                        className={pictureStyles.Picture_ToLeft}
                        src={mainImg}
                        width='100%'
                        height='100%' />
                </div>
                <div className={styles.AboutMe__TextContent}>
                    <div className={styles.AboutMe__Line}></div>
                    <h3 className={styles.AboutMe__Text}>
                        <Trans i18nKey="about.info" components={{ br: <br />, span: <span /> }} />
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;