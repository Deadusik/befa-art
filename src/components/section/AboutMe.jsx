import React from 'react'
//components
import SideTitle from '../ui/title/SideTitle'
import Picture from '../ui/picture/Picture'
//styles
import styles from './AboutMe.module.scss'
import pictureStyles from '../ui/picture/Picture.module.scss'
//imgs
import mainImg from '../../imgs/about_img.png'

const AboutMe = () => {
    return (
        <div className={styles.AboutMe}>
            <SideTitle isLeftSide={false}>About me</SideTitle>
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
                        I, <span className={styles.AboutMe__Text_Span}>Befa</span>, put mine
                        artistic abstracts<br />
                        Works before.<br />
                        These art pictures show
                        the<br />
                        whole spectrum of my inner joy,<br /> spiritual
                        Mood, immeasurable<br />
                        Joy for life.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;