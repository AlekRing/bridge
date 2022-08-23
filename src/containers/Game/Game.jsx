import React, { useEffect, useState } from 'react'
import Card from '@/components/Card/Card';
import { startShake } from '@/store/reducers/cards';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstCard, selectSecondCard, selectIsLoading, selectBalance } from '@/store/selectors';
import { add, subtract } from '@/store/reducers/balance';
import InputCommon from '@/components/InputCommon/InputCommon';
import ButtonCommon from '@/components/ButtonCommon/ButtonCommon';
import classNames from 'classnames';
import styles from './styles.scss';

const cardsValues = {
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14,
};

const cardBack = 'https://www.seekpng.com/png/full/121-1215767_back-of-card-cards-back.png';

const Game = () => {
    const dispatch = useDispatch();
    const firstCard = useSelector(selectFirstCard);
    const secondCard = useSelector(selectSecondCard);
    const balance = useSelector(selectBalance);
    const isLoading = useSelector(selectIsLoading);

    const [bet, setBet] = useState(0);
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        dispatch(startShake());
    }, []);

    const handleClick = (value) => {
        const firstVal = cardsValues[firstCard.value] || firstCard.value;
        const secondVal = cardsValues[secondCard.value] || secondCard.value;
        const numberVal = cardsValues[value] || Number(value);

        setIsTouched(true);
        if (numberVal < firstVal || numberVal < secondVal) {
            return dispatch(subtract(bet));
        }

        dispatch(add(bet * 2));
    };

    const handleBetChange = (e) => {
        setBet(e.target.value);
    };

    const refreshCards = () => {
        dispatch(startShake());
        setIsTouched(false);
    };

    return (
        <div className={styles.gameBoard}>
            <InputCommon placeholder='Ваша ставка...' type='number' value={bet} onChange={handleBetChange} max={balance}/>
            <ButtonCommon text='Новый раунд!' action={refreshCards} customStyles={styles.btn} />
            <div className={classNames(styles.cards, isLoading && styles.loading)}>
                {isTouched
                    ? <Card img={firstCard?.image} value={null} handleClick={()=>{}}/>
                    : <Card img={cardBack} value={firstCard?.value} handleClick={handleClick} />
                }
                <h6>VS</h6>
                {isTouched
                    ? <Card img={secondCard?.image} value={null} handleClick={()=>{}}/>
                    : <Card img={cardBack} value={secondCard?.value} handleClick={handleClick} />
                }
            </div>
        </div>
    )
};

export default Game;
