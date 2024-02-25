import React from 'react';
import cl from "./new_items.module.css";
import CardList from '../CardList/CardList';

const New_items = () => {
    return ( 
        <div className={cl.new_items}>
            <div className={cl.shop_title}>Свежие поступления</div>
            <div className={cl.items}>
                <CardList/>
            </div>
        </div>
    )
}
export default New_items;