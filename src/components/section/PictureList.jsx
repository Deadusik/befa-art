import React, { useState } from 'react'
//components
import Wrapper from '../wrapper/Wrapper'
import SideTitle from '../ui/title/SideTitle'
import PictureInfo from '../ui/picture/PictureInfo'
import Button from '../ui/button/Button'
//styles
import styles from './PictureList.module.scss'
//images 
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'
import img9 from '../../imgs/img9.png'
import img10 from '../../imgs/img10.png'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const PictureList = () => {
    const titleImgs = [
        {
            src: img1,
        },
        {
            src: img2,
        },
        {
            src: img3,
        },
        {
            src: img4,
        },
    ]
    const hiddenImgs = [
        {
            src: img5,
        },
        {
            src: img6,
        },
        {
            src: img7,
        },
        {
            src: img8,
        },
        {
            src: img9,
        },
        {
            src: img10,
        }
    ];

    const [imgs, setImgs] = useState(titleImgs);
    const [ohterIsHidden, setOtherIsHidden] = useState(true);

    const loadMore = () => {
        if (ohterIsHidden)
            setImgs([...titleImgs].concat(hiddenImgs));
        else
            setImgs(titleImgs);

        setOtherIsHidden(!ohterIsHidden);
    }

    const pictureInfo = (picture, animName, index) =>
        <CSSTransition
            key={Date.now.toString() + index}
            timeout={500}
            classNames={animName}>
            <div className={styles.PictureList__Picture}>
                <PictureInfo
                    key={Date.now.toString() + index}
                    src={picture.src} />
            </div>
        </CSSTransition>


    return (
        <Wrapper >
            <div className={styles.PictureList}>
                <SideTitle>My portfolio</SideTitle>
                <div className={styles.PictureList__PictureContainer}>
                    <div className={styles.PictureList__Column}>
                        <TransitionGroup>
                            {
                                imgs.map((picture, index) => {
                                    if (index % 2 === 0) {
                                        return (
                                            pictureInfo(picture, 'show-right', index)
                                        );
                                    }
                                })
                            }
                        </TransitionGroup>
                    </div>
                    <div className={styles.PictureList__Column}>
                        <TransitionGroup>
                            {
                                imgs.map((picture, index) => {
                                    if (index % 2 !== 0) {
                                        return (
                                            pictureInfo(picture, 'show-left', index)
                                        );
                                    }
                                })
                            }
                        </TransitionGroup>
                    </div>
                </div>
                <div className={styles.PictureList__Button}>
                    <Button onClick={() => loadMore()}>
                        {ohterIsHidden ?
                            <p>Load more</p> : <p>Hide</p>}
                    </Button>
                </div>
            </div >
        </Wrapper>
    )
}

export default PictureList;