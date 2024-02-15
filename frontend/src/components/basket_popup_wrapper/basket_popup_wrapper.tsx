import React, { useState, useEffect } from 'react';
import useActions from '../../hooks/useAcrions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICard } from '../../type/cards';
import cl from './basket_popup_wrapper.module.css';

interface PopupProps {
    style: boolean;
    handleClosePopup: () => void;
}

const Basket_popup_wrapper: React.FC<PopupProps> = ({ style, handleClosePopup }) => {
    const { isAuth,} = useTypedSelector(state => state.users);
    const { items, totalPrice,  } = useTypedSelector(state => state.basket);
   
    return (
        <div className={cl.basket_popup_wrapper} style={{ display: style ? 'block' : 'none' }}>
            <div className={cl.basket_popup}>
                <div onClick={handleClosePopup} className={cl.close}>✕</div>
                {isAuth ? (
                    <>
                        <div className={cl.items}>
                            {items && items?.length > 0 ? (
                                items.map((item: ICard, index: number) => (
                                    <div key={index} className={cl.item_in_basket}>
                                        <a className={cl.a} href={`/items/${item._id}`}>
                                            <div className={cl.image}>
                                                {item.picture && item.picture.length > 0 && (
                                                    <img className={cl.img} style={{ height: '65px' }} src={`https://eurodom.kg/api/${item.picture[0]}`} />
                                                )}
                                            </div>
                                            <div className={cl.descr}>
                                                <div className={cl.title}>{item.name}</div>
                                                <div className={cl.quantity_prise}>Количество: {item?.quantity}</div>
                                                <div className={cl.quantity_prise}>{`Цена: ${item.price} сом.`}</div>
                                                {/* <div className={cl.price_new">Цена со скидкой: 37.05 руб.</div> */}
                                            </div>
                                        </a>
                                    </div>
                                )))
                                :
                                (<div className={`empty-cart-message`}>Корзина пуста</div>)
                            }
                        </div>
                        <div className={cl.itogo}>
                            <div className='total'>Итого: {totalPrice} сом.
                                {/* <span className={cl.discount_exist">{totalPrice}</span> */}
                            </div>
                            <div className={cl.btns}>
                                <a href="/basket/">Корзина</a>
                                <a href="/checkout/">Оформить</a>
                            </div>
                        </div>
                    </>
                    )
                :
                    (
                        <div className={cl.auntif}>
                            <h1>Пользователь <br className={cl.phone_login}></br> не авторизован</h1>
                            <div className="icon_cont">
                                <a className={cl.link} href="/login/">Вход</a>
                                <a className={cl.link} href="/registration/">Регистрация</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Basket_popup_wrapper;
