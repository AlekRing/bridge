import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '@/store/selectors';
import styles from './styles.scss';

const Balance = () => {
    const balance = useSelector(selectBalance);
    return (
        <div className={styles.balance}>Balance: {balance}</div>
    )
};

export default Balance;
