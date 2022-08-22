import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Balance from '@/components/Balance/Balance';
import Header from '@/containers/Header/Header';
import styles from './styles.scss';

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const isLoggedIn = localStorage.getItem('isLoggedIn');

            if (!isLoggedIn) {
                throw new Error('You must be logged in');
            }
        } catch (error) {
            console.error(error);
            navigate('/login');
        }
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Balance />
                <h1>Кто выйграет?</h1>
                <span>Сыграй!</span>
            </main>
        </>
    )
};

export default Main;
