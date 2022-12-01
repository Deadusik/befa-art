import React from 'react'
//components
import Picture from '../ui/picture/Picture'
import Wrapper from '../wrapper/Wrapper'
//styles
import styles from './HomeHeader.module.scss'
import WrapperStyles from '../wrapper/Wrapper.module.scss'
//imgs 
import MainImg from '../../imgs/main_img.png'
import Img1 from '../../imgs/img4.png'
import Img2 from '../../imgs/img3.png'



const HomeHeader = () => {
    return (
        <Wrapper styleModifier={[WrapperStyles.Wrapper_Top, WrapperStyles.Wrapper_Column].join(' ')}>
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
                    <div className={styles.HomeHeader__Column}>
                        <div className={styles.HomeHeader__Picture}>
                            <Picture
                                width='100%'
                                height='100%'
                                src={Img1} />
                        </div>
                        <div className={styles.HomeHeader__Picture}>
                            <Picture
                                width='100%'
                                height='100%'
                                src={Img2} />
                        </div>
                    </div>
                    <div className={styles.HomeHeader__MainPicture}>
                        <Picture
                            width='100%'
                            height='100%'
                            src={MainImg} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default HomeHeader;