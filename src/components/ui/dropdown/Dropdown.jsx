import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ options, onChange, ...props }) => {
    return (
        <div className={styles.Dropdown}>
            <select className={styles.Dropdown__Select}>
                {
                    options.map(option =>
                        <option
                            className={styles.Dropdown__Option}
                            key={option.key}
                            vlaue={option.vlaue}
                            onChange={e => onChange(e.target.vlaue)}>
                            {option.name}
                        </option>
                    )
                }
            </select >
        </div>
    )
}

export default Dropdown;