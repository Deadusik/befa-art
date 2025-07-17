import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
// utils
import { PORTFOLIO_ID } from '../../utils/constants'

const PictureList = () => {
    const { t } = useTranslation()
    //hard data
    const title = t("portfolio.img-title-example");
    const description = {
        title: t("portfolio.img-title-info-example"),
        text: <Trans i18nKey="portfolio.img-info-example" components={{ br: <br /> }} />
    }

    const titleImgs = [
        {
            src: img1,
            title: title,
            description: description
        },
        {
            src: img2,
            title: title,
            description: description
        },
        {
            src: img3,
            title: title,
            description: description
        },
        {
            src: img4,
            title: title,
            description: description
        },
    ]
    const hiddenImgs = [
        {
            src: img5,
            title: title,
            description: description
        },
        {
            src: img6,
            title: title,
            description: description
        },
        {
            src: img7,
            title: title,
            description: description
        },
        {
            src: img8,
            title: title,
            description: description
        },
        {
            src: img9,
            title: title,
            description: description
        },
        {
            src: img10,
            title: title,
            description: description
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
                    src={picture.src}
                    title={picture.title}
                    description={picture.description} />
            </div>
        </CSSTransition>


    return (
        <Wrapper >
            <div id={PORTFOLIO_ID} className={styles.PictureList}>
                <SideTitle>{t("portfolio.title")}</SideTitle>
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
                            <p>{t("portfolio.more")}</p> : <p>{t("portfolio.less")}</p>}
                    </Button>
                </div>
            </div >
        </Wrapper>
    )
}

export default PictureList;