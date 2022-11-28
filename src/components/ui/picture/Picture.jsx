import React from 'react'
import styles from './Picture.module.scss'

const banDragAndDrop = event => {
    event.preventDefault ? event.preventDefault() : event.returnValue = false
};

const Picture = ({ src, width, height }) => {
    return (
        <img
            src={src}
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