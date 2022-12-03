import React from 'react'
import styles from './Logo.module.scss'

const Logo = ({ className }) => {
    return (
        <h1 className={className ? `${styles.Logo} ${className}` : styles.Logo}>BefaArt</h1>
    )
}

export default Logo;

