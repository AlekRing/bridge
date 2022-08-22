import React, { useEffect } from 'react'
import Card from '@/components/Card/Card';
import { startShake } from '@/store/reducers/cards';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstCard, selectSecondCard } from '@/store/selectors';
import styles from './styles.scss';

// const CARDS_COUNT = 2;

const cardsValues = {
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14,
};

const Game = () => {
    const dispatch = useDispatch();
    const firstCard = useSelector(selectFirstCard);
    const secondCard = useSelector(selectSecondCard);

    useEffect(() => {
        dispatch(startShake());
    }, []);

    const handleClick = (value) => {
        console.log(value, firstCard, secondCard);

    };

    return (
        <div className={styles.gameBoard}>
            <Card img={firstCard?.image} value={firstCard?.value} handleClick={handleClick}/>
            <h6>VS</h6>
            <Card img={secondCard?.image} value={secondCard?.value} handleClick={handleClick}/>
        </div>
    )
};

export default Game;
