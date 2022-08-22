import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputCommon from '@/components/inputCommon/InputCommon';
import styles from './styles.scss';
import ButtonCommon from '@/components/ButtonCommon/ButtonCommon';

const formElements = {
    email: 'email',
    password: 'password',
}

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (login !== 'admin' && password !== '123456') {
                return setIsError(true);
            }

            localStorage.setItem('isLoggedIn', true);
            navigate('/');
        } catch (error) {
            console.error('Login error: ', error);
        }
    };

    return (
        <>
            <h1 className={styles.loginTitle}>login</h1>
            <form action="submit" onSubmit={handleSubmit} className={styles.loginForm}>
                <label htmlFor="submit">admin</label>
                <InputCommon name={formElements.email} type='text' autoComplete placeholder='email or login' value={login} onChange={handleLoginChange} />
                <label htmlFor="password">123456</label>
                <InputCommon name={formElements.password} type='password' autoComplete placeholder='password' value={password} onChange={handlePasswordChange} />
                {isError && <span className={styles.error}>Имя пользователя или пароль введены не верно</span>}
                <ButtonCommon text={'Login'} type='submit' />
            </form>
        </>
    )
};

export default Login;