import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import InfoButton from '../button/InfoButton';
import styles from './PictureInfo.module.scss'

const banDragAndDrop = event => {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
};

const PictureInfo = ({ src, title, description }) => {
    const [isMouseHover, setIsMouseHover] = useState(false);
    const [isContentShow, setIsContentShow] = useState(false);

    return (
        <div className={styles.PictureInfo}
            onMouseLeave={() => {
                setIsMouseHover(false);
                setIsContentShow(false);
            }}
            onMouseEnter={() => setIsMouseHover(true)}>
            <CSSTransition
                in={isMouseHover}
                classNames='from-full-opacity'
                timeout={500}>
                <div className={styles.PictureInfo__Background}
                    style={
                        {
                            backgroundImage: `url(${src})`
                        }
                    }
                    onMouseDown={event => banDragAndDrop(event)}>
                </div>
            </CSSTransition>
            {isMouseHover &&
                <div className={styles.PictureInfo__Content}>
                    <div className={styles.PictureInfo__Button}>
                        <InfoButton isActive={isContentShow} onClick={() => setIsContentShow(!isContentShow)} />
                    </div>
                    {isContentShow ?
                        <div className={styles.PictureInfo__DescriptionContent}>
                            <h2 className={styles.PictureInfo__DescriptionTitle}>{description.title}</h2>
                            <pre className={styles.PictureInfo__DescriptionText}>{description.text}</pre>
                        </div>
                        :
                        <h2 className={styles.PictureInfo__Title}>{title}</h2>
                    }
                </div>
            }
        </div>
    )
}

export default PictureInfo;