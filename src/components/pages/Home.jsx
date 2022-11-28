import React from 'react'
//components
import HomeHeader from '../header/HomeHeader'
import Wrapper from '../wrapper/Wrapper'
import PictureList from '../section/PictureList'
//styles
import styles from './Home.module.scss'
import WrapperStyles from '../wrapper/Wrapper.module.scss'
import SizedBox from '../sized_box/SizedBox'



const Home = () => {
    return (
        <div className={styles.Home}>
            <Wrapper styleModifier={[WrapperStyles.Wrapper_Top, WrapperStyles.Wrapper_Column].join(' ')}>
                <SizedBox height='114px' />
                <HomeHeader />
                <SizedBox
                    height='142px' />
                <PictureList />
            </Wrapper>
        </div>
    );
}

export default Home;