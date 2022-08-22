import React from 'react';
import styles from './styles.scss';

const Balance = ({balance = '0.00'}) => {
    return (
        <div className={styles.balance}>Balance: {balance}</div>
    )
};

export default Balance;
