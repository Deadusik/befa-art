import React from 'react'
import styles from './Wrapper.module.scss'

const Logo = ({ children, styleModifier }) => {
    return (
        <div className={[styles.Wrapper, styleModifier].join(' ')}>
            {children}
        </div>
    )
}

export default Logo;