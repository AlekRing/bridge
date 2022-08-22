import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.scss';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h4>Bridge</h4>
                <Link to='/login'>SignOut</Link>
            </header>
        </>
    )
};

export default Header;
