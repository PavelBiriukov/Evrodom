import React from 'react';
import { ICard } from '../../type/cards';
import CardID from '../CardID/CardID';
import cl from './CardItem.module.css'
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/swiper.css"; 

export interface CardItemProps {
    card: ICard
}

const CardItem: React.FC<CardItemProps> = ({card}) => {
    return (      
        <div className={`item ${cl.block}`} data-discount-type="absolute" data-discount="0.00" data-code="184978">
            <a className={cl.link} href={`/items/${card._id}`}>
                <div className="image">
                    <div className="item_tags"></div>
                    <div className="bg_dark"></div>
                    <img  className={cl.img} src={'https://eurodom.kg/api' + card.picture[0]} alt={card.name}/>
                    
                </div>
                <div className={cl.block_tytle_price}>
                    <div className={cl.title}>
                        {card.name}
                    </div>
                    <div className={cl.all_prices} data-discount="">
                        <div className={cl.price}>
                            {card.price} сом
                        </div>
                    </div>
                </div>
            </a>    
        </div>
    );
};

export default CardItem;