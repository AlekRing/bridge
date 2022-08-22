import classNames from 'classnames';
import React from 'react';
import styles from './styles.scss';

const ButtonCommon = ({text, action, type = 'button', children, customStyles}) => {
    return (
        <button className={classNames(styles.buttonCommon, customStyles)} type={type} onClick={action}>
            {text}
            {children}
        </button>
    )
};

export default ButtonCommon;
