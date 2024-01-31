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
import pochta from '../../img/icon/envelope.png'

const Middle_menu = () => {
    const { searchCard } = useActions()
    const [query, setQuery] = useState<string>('');
    const [cards, setCards] = useState<ICard[] | any>();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
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


    useEffect(() => {
        const closePopup = (e: any) => {
            const popup = document.querySelector(`.${cl.mimi_popup_serch}`);
            if (isPopupVisible && popup && !popup.contains(e.target)) {
                setPopupVisible(false);
            }
        };
        document.addEventListener('click', closePopup);
        return () => {
            document.removeEventListener('click', closePopup);
        };
    }, [isPopupVisible]);

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        if (value.trim() === '') {
            setCards(null); // Очистить карточки, если инпут пустой
        } else {
            setTimer(
                setTimeout(async () => {
                    const result = await searchCard(value);
                    setCards(result);
                    setPopupVisible(!!result);
                }, 500)
            );
        }
    }

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
        <div className={cl.middle_menu}>
            <div className={cl.inner}>
            <div className={cl.block_phone_planshet}>
                    <div className={cl.phone_blosk_too}>
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a className={cl.phone} href="tel:996501230390">+996 557 23 03 90</a>
                    </div>
                    <div className={cl.phone_blosk_too}>
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={telephon} />
                        <a className={cl.phone} href="tel:996501230390">+996 501 23 03 90</a>
                    </div>
                    <div className={cl.phone_blosk_too}>
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a className={cl.phone} href="tel:996501230390">+996 555 46 28 90</a>
                    </div>
                </div>
                <div className={cl.logo_wrapper}>
                    <a href="/" className={cl.logo}>
                        <img src={ava} alt="logo" />
                    </a>
                    <p className={cl.slogan}>Качественные материалы для вашего дома с бесплатной доставкой.</p>
                </div>
                <div className={cl.search_form}>
                    <form method="GET" action="/search/">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Поиск"
                            title="Поиск по товарам на сайте"
                            autoComplete="off"
                            onChange={search}
                            value={query}
                        />
                        <button type="submit" >
                            <img className={`f7-icons ${cl.serch_icon}`} src={searchIMG} alt="поиск" />
                        </button>
                        <div id="autocomplete"></div>
                    </form>
                    <div className={`${cl.mimi_popup_serch} ${isPopupVisible ? cl.mimi_popup_serch_visibiliti : ''}`}>
                        <ul>
                            {cards && cards.length > 0 ? (
                                cards.map((card: ICard) => (
                                    <a key={card._id} href={`/items/${card._id}`}>
                                        <li className={cl.item_list} key={card._id}>
                                            <img className={cl.img_item_list} src={`https://eurodom.kg/api/${card?.picture[0]}`} alt={card.name} />
                                            {card.name}
                                        </li>
                                    </a>
                                ))
                            ) : (
                                <li>Такого товара нет!</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={cl.middle_right}>
                    <div className={cl.search_open}>
                        <img src={searchIMG} />
                    </div>
                    <div className={cl.login_or_reg}>
                        <img src={icon_user} />
                        {isAuth ? (
                            <div className={cl.icon_cont_user}>
                                <p>{user?.email}</p>
                                <a onClick={handleLogout} href="/">Выйти</a>
                            </div>
                        ) : (
                            <div className={cl.icon_cont_user}>
                                <a href="/login/">Вход</a>
                                <a href="/registration/">Регистрация</a>
                            </div>
                        )}
                    </div>
                    <div className={cl.basket}>
                        <a href="/basket/">
                            <img src={shopping} />
                            <div className={cl.pop_up_count}>{isAuth ? `${items?.length || 0}`: '0'} </div>
                        </a>
                        <div className={cl.icon_cont}>
                            <div className={cl.basket_title}>Товаров на сумму: </div>

                            <div className={cl.pop_up_price}>{isAuth ? `${totalPrice} сом.` : '0 сом'}</div>
                        </div>
                    </div>
                </div>
                <div className={cl.block_phone}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a className={cl.phone} href="tel:996501230390">+996 557 23 03 90</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={telephon} />
                        <a className={cl.phone} href="tel:996501230390">+996 501 23 03 90</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={whatsapp} />
                        <a className={cl.phone} href="tel:996501230390">+996 555 46 28 90</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="phone">
                        <img className={cl.phone} style={{ width: '25px', marginRight: "10px" }} src={pochta} />
                        <a className={cl.phone} href="mailto:eurodom.kg@gmail.com" target="_blank">eurodom.kg@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle_menu;