import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import styles from './PictureInfo.module.scss'

const banDragAndDrop = event => {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
};

const PictureInfo = ({ src, title, description }) => {
    const [isMouseHover, setIsMouseHover] = useState(false);

    return (
        <div className={styles.PictureInfo}>
            <CSSTransition
                in={isMouseHover}
                classNames='picture'
                timeout={500}>
                <div className={styles.PictureInfo__Background}
                    style={
                        {
                            backgroundImage: `url(${src})`
                        }
                    }
                    onMouseLeave={() => setIsMouseHover(false)}
                    onMouseEnter={() => setIsMouseHover(true)}
                    onMouseDown={event => banDragAndDrop(event)}>
                    {isMouseHover &&
                        <div className={styles.PictureInfo__TitleContent}>
                            <h2 className={styles.PictureInfo__Title}>Corrida</h2>
                        </div>
                    }
                </div>
            </CSSTransition>
        </div>
    )
}

export default PictureInfo;