import React, { useState, useEffect } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import { ICard } from '../../type/cards';
import cl from "../middle_menu/middle_menu.module.css";
import clbottom from "./bottom_menu.module.css";
import searchIMG from "../../img/icon/free-icon-search-4024513.png";
import katalogIMG from "../../img/icon/free-icon-font-menu-burger-3917215.png";
import useActions from '../../hooks/useAcrions';

const Bottom_menu = () => {
    const { searchCard } = useActions()
    const [query, setQuery] = useState<string>('');
    const [cards, setCards] = useState<ICard[] | any>();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
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
        <div className='bottom_menu'>
            <div className='inner'>
                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }} className='categories'>
                    {/* <ul className='level_1'>
                        <li>
                            <a href="/categories/hleba/" className="" title="Двери">Двери</a>
                        </li>
                        <li>
                            <a href="/categories/bulochnye-izdeliya/" className="" title="Линолиум">Линолиум</a>
                        </li>
                        <li>
                            <a href="/categories/gastronomiya/" className="" title="САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ">Сайденг виниловый фосадный</a>
                        </li>
                        <li>
                            <a href="/categories/konditerskie-izdeliya/" className="" title="ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ">Пластик потолочный пвх</a>
                        </li>
                        <li>
                            <a href="/categories/novaya-kategoriya/" className="" title="МДФ ПАНЕЛИ">Мдф панели</a>
                        </li>
                    </ul> */}
                    <ul id="menu_list" style={{ overflow: 'visible' }}>
                        <li style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="li">
                            <a style={{ paddingRight: '5px' }} href="/">Каталог</a>
                            <img style={{ width: '20px', marginRight: '15px' }} src={katalogIMG} alt="каталог" />
                        </li>

                        <li className="li">
                            <a href="/">Главная</a>
                        </li>

                        <li className="li">
                            <a href="/o-kompanii/" className="" title="О компании">О компании</a>
                        </li>

                        <li className="li">
                            <a href="/dostavka-i-oplata/" className="" title="Доставка и оплата">Доставка и оплата</a>
                        </li>

                        <li className="li">
                            <a href="/kontakty/" className="" title="Контакты">Контакты</a>
                        </li>
                    </ul>
                    <div className="search_form" style={{ width: '35%' }}>
                        <form style={{ display: 'flex', flexDirection: 'row', alignContent: 'flex-end', alignItems: 'center' }} method="GET" action="/search/">
                            <input
                                style={{ width: '90%', height: '31px' }}
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
                        <div className={clbottom.dropdown__content_wrapper} id="i1zw16m4u_0" style={{ width: '100%', maxWidth: '300px', height: 'auto', opacity: '1', display: 'none' }}>
                            <div className={`dropdown__content ${clbottom.dropdown__content}`} id="ixpzzi0hy_0">
                                <div className={`div ${clbottom.div_u_inrzchron}`} id="inrzchron_0">
                                    <div className={`mosaic-shop2-folders ${clbottom.mosaic_shop2_folders_u_iwvpglffu}`} id="iwvpglffu_0">
                                        <ul className={clbottom.mosaic_shop2_folders__list}>
                                            <li style={{ position: 'relative' }} className={`${clbottom.mosaic_shop2_folders__item} has-child`}>
                                                <a className={clbottom.mosaic_shop2_folders__link} href="/magazin/folder/mezhkomnatnye-dveri">
                                                    <span className={clbottom.mosaic_shop2_folders__text}>Межкомнатные двери</span>
                                                    <span className={clbottom.mosaic_shop2_folders__icon}>
                                                        <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`}>
                                                            <img src="http://www.w3.org/2000/svg" style={{width:"20px", height:"20px"}} data-prefix="iwhtrbpc8"/>
                                                            
                                                        </span>
                                                    </span>
                                                </a>
                                                <ul className={clbottom.mosaic_shop2_folders__sub_list}>
                                                    <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                        <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/klassik-9">
                                                            <span className={clbottom.mosaic_shop2_folders__sub_text}>Коллекция Классика</span>
                                                        </a>
                                                    </li>
                                                    <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                        <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/lirika-1">
                                                            <span className={clbottom.mosaic_shop2_folders__sub_text}>Коллекция Неоклассика</span>
                                                        </a>
                                                    </li>
                                                    <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                        <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/elegiya-1">
                                                            <span className={clbottom.mosaic_shop2_folders__sub_text}>Современный стиль</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className={clbottom.mosaic_shop2_folders__item}>
                                                <a className={clbottom.mosaic_shop2_folders__link} href="/magazin/folder/vhodnye-dveri">
                                                    <span className={clbottom.mosaic_shop2_folders__text}>Входные двери</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom_menu;