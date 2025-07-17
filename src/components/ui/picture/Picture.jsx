import React, { useState } from 'react'
import styles from './Picture.module.scss'
import BoxLoading from '../info/BoxLoading';

const banDragAndDrop = event => {
    event.preventDefault ? event.preventDefault() : event.returnValue = false
};

const Picture = ({ src, width, height, className, alt = 'picture' }) => {
    const [isLoading, setIsLoading] = useState(true)

    const onLoadHandler = () => {
        setIsLoading(false)
    }

    return (
        <>
            {
                isLoading &&
                <BoxLoading />
            }
            <img
                className={[styles.Picture, className].join(' ')}
                src={src}
                alt={alt}
                style={
                    {
                        width: width,
                        height: height,
                        display: isLoading ? 'none' : 'block'
                    }
                }
                onLoad={onLoadHandler}
                onMouseDown={event => banDragAndDrop(event)} />
        </>
    )
}

export default Picture;