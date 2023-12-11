import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useActions from '../../../hooks/useAcrions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../type/cards';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import cl from './basket.module.css';
import imgClouse from '../../../img/icon/free-icon-font-cross-3917189.png';
const Basket = () => {
    const { items, totalPrice } = useTypedSelector(state => state.basket);
    const { isAuth, user } = useTypedSelector(state => state.users);
    const { removeFromCart, getBasket, updateBasketAction } = useActions()
    console.log(items);
    
    const updateBasket = useCallback(
        (updatedItems: any) => {
            const basketItems = {
                items: updatedItems,
                userId: [user.id],
            };
            updateBasketAction(basketItems);
        },
        [updateBasketAction, user.id]
    );

    const increaseQuantity = useCallback(
        (item: ICard) => {
            const updatedItems = items?.map((basketItem: any) =>
                basketItem._id === item._id ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
            );
            updateBasket(updatedItems);
        },
        [items, updateBasket]
    );

    const decreaseQuantity = useCallback(
        (item: ICard) => {
            const updatedItems = items?.map((basketItem: any) =>
                basketItem._id === item._id && basketItem.quantity > 1
                    ? { ...basketItem, quantity: basketItem.quantity - 1 }
                    : basketItem
            );
            updateBasket(updatedItems);
        },
        [items, updateBasket]
    );

    const removeItemsBasket = useCallback(
        (item: ICard) => {
            const backetItems = {
                items: items,
                userId: [user.id],
            };
            removeFromCart(backetItems, item._id);
        },
        [items, removeFromCart, user.id]
    );

    useEffect(() => {
        getBasket(user.id);
    }, []);
    
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className="block main">
                    <div className="inner">
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span>
                                    <a href="/">Главная</a>
                                    /
                                </span>
                                <span>Корзина</span>
                            </div>
                            <h1 className="shop-title">Корзина</h1>
                            <div className="promo-descr"></div>
                            {isAuth ? (
                                <div id="basket_list">
                                    {items && items?.length > 0 ? (
                                        items.map((item: any, index: number) => (
                                            <div key={index} className="basket_item_wrapp">
                                                <div className="item_in_basket_titles">
                                                    <div className="title">Наименование товара</div>
                                                    <div className="img"></div>
                                                    <div className="price">Цена</div>
                                                    <div className="quantity">Количество</div>
                                                    <div className="total">Стоимость</div>
                                                    <div onClick={() => removeItemsBasket(item)} className="remove" data-index="0">
                                                        <img style={{width: '15px'}}  src={imgClouse} alt="закрыть" />
                                                    </div>
                                                </div>
                                                <div className="item_in_basket" key={index}>
                                                    <div className="image">
                                                        <img src={`http://localhost:5000/${item.picture[0]}`} alt={item.name} />
                                                    </div>
                                                    <div className="title">
                                                        <a href={`/items/${item._id}`}>
                                                            {item.name}
                                                        </a>
                                                        <br />
                                                        <span className="v_code">Код товара: {item._id}</span>
                                                    </div>
                                                    <div className="price">
                                                        <div> </div>
                                                        <span className="">{item.price} сом.</span>
                                                    </div>
                                                    <div className="quantity">
                                                        <div className="count">
                                                            <div onClick={() => decreaseQuantity(item)} className="count_minus">-</div>
                                                            <input
                                                                data-index={index}
                                                                type="text"
                                                                name="quantity"
                                                                className="number_input"
                                                                value={item.quantity}
                                                                min="1"
                                                                step="1"
                                                                max="100"
                                                                readOnly
                                                            />
                                                            <div onClick={() => increaseQuantity(item)} className="count_plus">+</div>
                                                        </div>
                                                    </div>
                                                    <div className="total">
                                                        <div className="total_new">{item.price * item.quantity}</div>
                                                        <span className="">сом.</span>
                                                    </div>
                                                    <div className=""> </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={`empty-cart-message`}>Корзина пуста</div>
                                    )}
                                    <div className="basket_end">
                                        <div className="right">
                                            <div className="total_basket_wrapp">
                                                <span>Итоговая сумма: </span>
                                                <span id="basket_total">
                                                    <span className="">{totalPrice}</span>
                                                    &nbsp;
                                                </span> сом.
                                            </div>
                                            <a className="checkout_btn" href="/checkout/">Оформить заказ</a>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={cl.auntif}>
                                    <h1>Пользователь не авторизован</h1>
                                    <div className="icon_cont">
                                        <a className={cl.link} href="/login/">Вход</a>
                                        <a className={cl.link} href="/registration/">Регистрация</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Basket;
