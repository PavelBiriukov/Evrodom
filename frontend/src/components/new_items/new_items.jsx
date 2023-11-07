import React from 'react';
import cl from "./new_items.module.css";
import img1 from "../../img/hleb-aromatnyy_1630386388.jpg"
import img2 from "../../img/hleb-aromatnyy-2_1630386393.jpg"
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