import React from 'react';
import styles from './styles.scss';

const InputCommon = ({type = 'text', placeholder = 'type here', name = '', autoComplete, value, onChange, max = 0}) => {
    return (
        <input
            className={styles.inputCommon}
            type={type}
            placeholder={placeholder}
            name={name}
            autoComplete={autoComplete ? 'on' : 'off'}
            value={value}
            onChange={onChange}
            min='1'
            max={max}
            step='1'
        />
    )
};

export default InputCommon;
