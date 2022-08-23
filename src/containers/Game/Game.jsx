import React, { useEffect } from 'react'
import Card from '@/components/Card/Card';
import { startShake } from '@/store/reducers/cards';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstCard, selectSecondCard } from '@/store/selectors';
import { add, subtract } from '@/store/reducers/balance';
import ButtonCommon from '@/components/ButtonCommon/ButtonCommon';
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
        const firstVal = cardsValues[firstCard.value] || firstCard.value;
        const secondVal = cardsValues[secondCard.value] || secondCard.value;
        const numberVal = cardsValues[value] || Number(value);

        if (numberVal < firstVal || numberVal < secondVal) {
            console.log(numberVal, 'you loose');
            return;
        }

        console.log(numberVal, 'you win!');
        dispatch(add(10));
    };

    const refreshCards = () => {
        dispatch(startShake());
    };

    return (
        <div className={styles.gameBoard}>
            <ButtonCommon text='New Cards' action={refreshCards} />
            <div className={styles.cards}>
                <Card img={firstCard?.image} value={firstCard?.value} handleClick={handleClick}/>
                <h6>VS</h6>
                <Card img={secondCard?.image} value={secondCard?.value} handleClick={handleClick}/>
            </div>
        </div>
    )
};

export default Game;
