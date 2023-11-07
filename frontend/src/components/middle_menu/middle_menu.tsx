import React, { useState, useEffect } from 'react';
import useActions from '../../hooks/useAcrions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import searchIMG from "../../img/icon/free-icon-search-4024513.png";
import shopping from "../../img/icon/free-icon-shopping-bag-10466687.png";
import ava from "../../img/logo/LOGO_EVRODOM.png";
import "../../styles/dop_styles.css";
import "../../styles/styles.css";
import { ICard } from '../../type/cards';
import { ICartItem } from '../../type/cartItem';
import cl from "./middle_menu.module.css";
const Middle_menu = () => {
    const { searchCard } = useActions()
    const [query, setQuery] = useState<string>('');
    const [cards, setCards] = useState<ICard[] | any>();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const { cartItems } = useTypedSelector(state => state.cartItems);
    const [cartLength, setCartLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        // При изменении cartItems пересчитываем общую стоимость товаров
        setCartLength(cartItems.reduce((acc, item) => acc + item.quantity, 0));
        let totalPrice = 0;
        if (cartItems.length > 0) {
            totalPrice = cartItems.reduce((acc: number, cartItem: ICartItem) => {
                const price = parseFloat(cartItem.item.price); // Предполагаем, что цена товара является числом
                const quantity = cartItem.quantity;
                return acc + (price * quantity);
            }, 0);
        }
        setTotalPrice(totalPrice);
    }, [cartItems]);

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

    return (
        <div className="middle_menu">
            <div className="inner">
                <div className="logo_wrapper">
                    <a href="/" className="logo">
                        <img src={ava} alt="Вкусный хлебушек" />
                    </a>
                    <p className="slogan">Качественные материалы для вашего дома с бесплатной доставкой.</p>
                </div>
                <div className="search_form" style={{ width: '43%' }}>
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
                </div>
                <div className="middle-right">
                    <div className="search_open">
                        <img src={searchIMG} />
                    </div>
                    <div className="basket">
                        <a href="/basket/">
                            <img src={shopping} />
                            <div className="pop_up_count">{cartLength}</div>
                        </a>
                        <div className="icon_cont">
                            <div className="basket-title">Товаров на сумму:</div>
                            
                            <div className="pop_up_price">{totalPrice} сом.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle_menu;