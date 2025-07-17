import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ options, onChange, selectedValue }) => {
    return (
        <div className={styles.Dropdown}>
            <select className={styles.Dropdown__Select}
                onChange={e => onChange(e)}
                value={selectedValue}>
                {
                    options.map(option =>
                        <option
                            className={styles.Dropdown__Option}
                            key={option.key}
                            value={option.value}>
                            {option.name}
                        </option>
                    )
                }
            </select >
        </div>
    )
}

export default Dropdown;