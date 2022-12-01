import React from 'react'
//components
import HomeHeader from '../header/HomeHeader'
import PictureList from '../section/PictureList'
import AboutMe from '../section/AboutMe'
import Footer from '../footer/Footer'
//styles
import styles from './Home.module.scss'




const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Home__HomeHeader}>
                <HomeHeader />
            </div>
            <div className={styles.Home__PictureList}>
                <PictureList />
            </div>
            <div className={styles.Home__AboutMe}>
                <AboutMe />
            </div>
            <div className={styles.Home__Footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Home;