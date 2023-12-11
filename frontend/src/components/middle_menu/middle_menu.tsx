import React, { useState, useEffect } from 'react';
import useActions from '../../hooks/useAcrions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import searchIMG from "../../img/icon/free-icon-search-4024513.png";
import shopping from "../../img/icon/free-icon-shopping-bag-10466687.png";
import ava from "../../img/logo/LOGO_EVRODOM.png";
import "../../styles/dop_styles.css";
import "../../styles/styles.css";
import { ICard } from '../../type/cards';
import cl from "./middle_menu.module.css";
import icon_user from "../../img/icon/free-icon-font-circle-user-9821479.png";
import telephon from '../../img/icon/free-icon-phone-10320613.png'
import whatsapp from '../../img/icon/free-icon-whatsapp-3536445.png'
import telegram from '../../img/icon/free-icon-telegram-906377.png'
const Middle_menu = () => {

    const { user, isLoading, isAuth } = useTypedSelector(state => state.users);
    const { items, totalPrice } = useTypedSelector(state => state.basket);
    const { checkAuth, logout, getBasket } = useActions();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (localStorage.getItem('token')) {
                    await checkAuth();
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                // Обработка ошибки, например, установка статуса ошибки в локальный state
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // Добавьте здесь условие, чтобы избежать вывода undefined
        if (isAuth && user) {
            getBasket(user.id)
        }
    }, [user, isLoading, isAuth]);




    const handleLogout = async () => {
        console.log("Before logout:", isAuth);
        await logout(); // Вызов функции logout при клике на "Выйти"
        console.log("After logout:", isAuth);
        // Можешь добавить здесь дополнительные действия, если необходимо
    };

    if (isLoading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className="middle_menu">
            <div className="inner">
                <div className="top_menu_right">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a style={{ fontSize: "20px" }} href="tel:996501230390">+996 557 23 03 90</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img style={{ width: '25px', marginRight: "10px" }} src={telephon} />
                        <a style={{ fontSize: "20px" }} href="tel:996501230390">+996 501 23 03 90</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a style={{ fontSize: "20px" }} href="tel:996501230390">+996 555 46 28 90</a>
                    </div>

                    {/* <div style={{ fontSize: '20px', fontWeight: '600', display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }} className='categories'>
                        График работы:
                        <ul id="menu_list" style={{width: '100%',overflow: 'visible' ,display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                            <li className="li">
                                <a href="#">ВС</a>
                            </li>
                            <li className="li">
                                <a href="#">ПН</a>
                            </li>
                            <li className="li">
                                <a href="#">ВТ</a>
                            </li>
                            <li className="li">
                                <a href="#">СР</a>
                            </li>
                            <li className="li">
                                <a href="#">ЧВ</a>
                            </li>
                            <li className="li">
                                <a href="#">ПТ</a>
                            </li>
                        </ul>
                    </div> */}

                </div>
                {/* <div className="search_form" style={{ width: '35%' }}>
                    <form method="GET" action="/search/">
                        <input
                            style={{ width: '100%' }}
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Что будем искать?"
                            title="Поиск по товарам на сайте"
                            autoComplete="off"
                            onChange={search}
                            value={query}
                        />
                        <button type="submit">
                            <img className={`f7-icons ${cl.serch_icon}`} src={searchIMG} alt="поиск" />
                        </button>
                        <div id="autocomplete"></div>
                    </form>

                    <div className={`${cl.mimi_popup_serch} ${isPopupVisible ? cl.mimi_popup_serch_visibiliti : ''}`}>
                        <ul>
                            {cards && cards.length > 0 ? (
                                cards.map((card: ICard) => (
                                    <a href={`/items/${card._id}`}>
                                        <li className={cl.item_list} key={card._id}>
                                            <img className={cl.img_item_list} src={`http://localhost:5000/${card?.picture[0]}`} alt={card.name} />
                                            {card.name}
                                        </li>
                                    </a>
                                ))
                            ) : (
                                <li>Такого товара нет!</li>
                            )}
                        </ul>
                    </div>
                </div> */}
                <div className="logo_wrapper">
                    <a href="/" className="logo">
                        <img src={ava} alt="Вкусный хлебушек" />
                    </a>
                    {/* <p className="slogan">Качественные материалы для вашего дома с бесплатной доставкой.</p> */}
                </div>
                <div className="middle-right">
                    <div className="search_open">
                        <img src={searchIMG} />
                    </div>
                    <div className="login_or_reg">
                        <img src={icon_user} />
                        {isAuth ? (
                            <div className="icon_cont">
                                <p>{user?.email}</p>
                                <a onClick={handleLogout} href="/">Выйти</a>
                            </div>
                        ) : (
                            <div className="icon_cont">
                                <a href="/login/">Вход</a>
                                <a href="/registration/">Регистрация</a>
                            </div>
                        )}
                    </div>
                    <div className="basket">
                        <a href="/basket/">
                            <img src={shopping} />
                            <div className="pop_up_count">{items?.length || 0} </div>
                        </a>
                        <div className="icon_cont">
                            <div className="basket-title">Товаров на сумму: </div>

                            <div className="pop_up_price">{totalPrice} сом.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle_menu;