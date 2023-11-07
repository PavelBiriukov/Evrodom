import React, { useState } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import { ICard } from '../../type/cards';
const Filter_items = ({ cards }: ICard[] | any, ) => {
    const [priсeMin, setPriсeMin] = useState<any>();
    const [priсeMax, setPriсeMax] = useState<any>();
    
    const productWithMinPrice = Array.isArray(cards) && cards.length > 0 ?
        cards.reduce((minProduct, currentProduct) => {
            return (currentProduct.price < minProduct) ? currentProduct.price : minProduct;
        }, cards[0]) : null;

    const productWithMaxPrice = Array.isArray(cards) && cards.length > 0 ?
        cards.reduce((maxProduct, currentProduct) => {
            return (currentProduct.price > maxProduct) ? currentProduct.price : maxProduct;
        }, cards[0]) : null;

    const filterByPriceRange = (products: [any], minPrice: any, maxPrice: any) => {
        return products?.filter((product: any) => product.price >= minPrice && product.price <= maxPrice);
    };

    const filteredProducts = filterByPriceRange(cards, priсeMin, priсeMax);
    
    
    return (
        <form method="GET" className="filter_items desktop">
            <div className="filter_bar">
                <div className="title"><span>Фильтр по параметрам</span>
                    <i className="fas fa-filter"></i>
                </div>
                <div className="price_range range_all">
                    <div className="f_title">Цена сом
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="list price_wrapp" style={{display: 'block'}}>
                        <div className="field">
                            <input
                                className="f_price min"
                                placeholder={`от ${productWithMinPrice}`}
                                name="min_price"
                                id="min_price"
                                type="text"
                                value={priсeMin}
                                onChange={(e) => setPriсeMin(Number(e.target.value))}
                            />
                            <input
                                className="f_price max"
                                placeholder={`до ${productWithMaxPrice?.price}`}
                                name="max_price"
                                id="max_price"
                                type="text"
                                value={priсeMax}
                                onChange={(e) => setPriсeMax(Number(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
                <div className="filter_checkbox filter_checkbox_all">
                    <div className="f_title">Производитель
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="list  ">
                        <label className="checkbox_container maker">
                            <div className="radio_title">Вкусный хлебушек</div>
                            <input data-type="ur" name="maker[]" type="checkbox" value="25243" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>

                <div className="btns_wrapper">
                    <button className="filter_make">Показать</button>
                    <a href="/categories/hleba/" className="filter_clear">Сбросить</a>
                </div>
            </div>
        </form>
    );
};

export default Filter_items;