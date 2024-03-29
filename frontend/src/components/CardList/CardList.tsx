import React, {useEffect} from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import { ICard } from '../../type/cards';
import CardItem from '../CardItem/CardItem';
import { fetchCard } from '../../store/action-creators/card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useAcrions';

interface CardListProps {
    cards: ICard[]
}

const CardList: React.FC<CardListProps> = () => {
    const {cards, error} = useTypedSelector(state => state.card);    
    const {fetchCard} = useActions()
    useEffect(() => {
        fetchCard(0, 0)
    },[])

    if (error) {
        return <h1>{error}</h1>  
    }
    const first8Cards = cards.reverse().slice(0, 8);
    return (
        <>
            {first8Cards.map(card =>
                <CardItem
                    key={card._id}
                    card={card}
                />
            )}
        </>
        
    );
};

export default CardList;