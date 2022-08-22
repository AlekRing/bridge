import React from 'react';
import styles from './styles.scss';

const ButtonCommon = ({text, action, type = 'button', children}) => {
    return (
        <button className={styles.buttonCommon} type={type} onClick={action}>
            {text}
            {children}
        </button>
    )
};

export default ButtonCommon;
