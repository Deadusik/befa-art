import React from 'react'
import styles from './Picture.module.scss'

const banDragAndDrop = event => {
    event.preventDefault ? event.preventDefault() : event.returnValue = false
};

const Picture = ({ src, width, height, className }) => {
    return (
        <img
            className={[styles.Picture, className].join(' ')}
            src={src}
            alt=''
            style={
                {
                    width: width,
                    height: height
                }
            }
            onMouseDown={event => banDragAndDrop(event)} />
    )
}

export default Picture;