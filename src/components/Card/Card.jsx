import React from 'react'
import ButtonCommon from '@/components/ButtonCommon/ButtonCommon';
import styles from './styles.scss';

const Card = ({img, value, handleClick}) => {
    return (
        <>
            <ButtonCommon customStyles={styles.card} action={() => handleClick(value)}>
                <img src={img} alt="card" width='226' height='314'/>
            </ButtonCommon>
        </>
    )
};

export default Card;
