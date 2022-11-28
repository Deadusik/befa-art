import React from 'react'
//components
import Picture from '../ui/picture/Picture'
import SizedBox from '../sized_box/SizedBox'
//styles
import styles from './HomeHeader.module.scss'
//imgs 
import MainImg from '../../imgs/main_img.png'
import Img1 from '../../imgs/img4.png'
import Img2 from '../../imgs/img3.png'



const HomeHeader = () => {
    return (
        <div className={styles.HomeHeader}>
            <div className={styles.HomeHeader__Title}>
                <div className={styles.HomeHeader__Text}>
                    Hello, i am
                </div>
                <h1 className={styles.HomeHeader__Logo}>
                    BefaArt.
                </h1>
            </div>
            <div className={styles.HomeHeader__Content}>
                <div>
                    <Picture
                        width='430px'
                        height='280px'
                        src={Img1} />
                    <SizedBox
                        height='55px' />
                    <Picture
                        width='430px'
                        height='280px'
                        src={Img2} />
                </div>
                <Picture
                    width='910px'
                    height='615px'
                    src={MainImg} />
            </div>
        </div>
    )
}

export default HomeHeader;