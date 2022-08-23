import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.scss';

const Balance = () => {
    const balance = useSelector(state => state.balance);
    return (
        <div className={styles.balance}>Balance: {balance}</div>
    )
};

export default Balance;
