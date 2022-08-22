import React from 'react';
import styles from './styles.scss';

const InputCommon = ({type, placeholder, name, autoComplete, value, onChange}) => {
    return (
        <input
            className={styles.inputCommon}
            type={type}
            placeholder={placeholder}
            name={name}
            autoComplete={autoComplete ? 'on' : 'off'}
            value={value}
            onChange={onChange}
        />
    )
};

export default InputCommon;
