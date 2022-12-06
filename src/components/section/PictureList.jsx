import React from 'react'
//components
import Wrapper from '../wrapper/Wrapper'
import SideTitle from '../ui/title/SideTitle'
import Picture from '../ui/picture/Picture'
import Button from '../ui/button/Button'
//styles
import styles from './PictureList.module.scss'
//images 
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'


const PictureList = () => {
    const imgColLeft = [];
    const imgColRight = [];

    return (
        <Wrapper >
            <div className={styles.PictureList}>
                <SideTitle>My portfolio</SideTitle>
                <div className={styles.PictureList__PictureContainer}>
                    <div className={styles.PictureList__Column}>
                        <div className={styles.PictureList__Picture}>
                            <Picture
                                src={img1}
                                width='100%'
                                height='auto' />
                        </div>
                        <div className={styles.PictureList__Picture}>
                            <Picture
                                src={img3}
                                width='100%'
                                height='auto' />
                        </div>
                    </div>
                    <div className={styles.PictureList__Column}>
                        <div className={styles.PictureList__Picture}>
                            <Picture
                                src={img2}
                                width='100%'
                                height='auto' />
                        </div>
                        <div className={styles.PictureList__Picture}>
                            <Picture
                                src={img4}
                                width='100%'
                                height='auto' />
                        </div>
                    </div>
                </div>
                <div className={styles.PictureList__Button}>
                    <Button>Load more</Button>
                </div>
            </div >
        </Wrapper>
    )
}

export default PictureList;