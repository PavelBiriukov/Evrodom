import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import telephon from '../../img/icon/free-icon-smartphone-call-15874.png'
const Top_menu = () => {
    return (
        <div className="top_menu">
            <div className="inner">
                <div className="top_menu_left">
                    <div className="mob_menu">
                        <img  src="/img/t/taymyr/menu.svg"/>
                    </div>
                    <div className="menu_popup_mob">
                        <i className="f7-icons close">multiply</i>
                        <div className="mob_top">
                            <h2>Навигация по сайту</h2>
                            <li className="li"><a href="/o-kompanii/" className="" title="О компании">О компании</a></li>
                            <li className="li"><a href="/dostavka-i-oplata/" className="" title="Доставка и оплата">Доставка и оплата</a></li>
                            <li className="li"><a href="/kontakty/" className="" title="Контакты">Контакты</a></li>
                            <h2>Категории товаров</h2>
                            <div className="categories">
                                <ul className="level_1">
                                    <li>
                                        <a href="/categories/hleba/" className="" title="Хлеб">Двери</a>
                                    </li>
                                    <li>
                                        <a href="/categories/bulochnye-izdeliya/" className="" title="Булочные изделия">Линолиум</a>
                                    </li>
                                    <li>
                                        <a href="/categories/gastronomiya/" className="" title="Гастрономия">САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ</a>
                                    </li>
                                    <li>
                                        <a href="/categories/konditerskie-izdeliya/" className="" title="Кондитерские изделия">ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ</a>
                                    </li>
                                    <li>
                                        <a href="/categories/novaya-kategoriya/" className="" title="Печенье">МДФ ПАНЕЛИ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="center menu">
                        <ul id="menu_list" style={{overflow: 'visible'}}>
                            <li className="li"><a href="/">Главная</a></li>

                            <li className="li">
                                <a href="/o-kompanii/" className="" title="О компании">О компании</a>
                            </li>

                            <li className="li">
                                <a href="/dostavka-i-oplata/" className="" title="Доставка и оплата">Доставка и оплата</a>
                            </li>

                            <li className="li">
                                <a href="/kontakty/" className="" title="Контакты">Контакты</a>
                            </li>
                            <div id="menu-toggler" style={{display: 'none'}}><i className="f7-icons">chevron_down</i></div>
                            <menu className="menu_p">
                                <ul id="menu_popup"></ul>
                            </menu>
                        </ul>
                    </div>
                </div>
                <div className="top_menu_right">
                    <div className="phone">
                        <img src={telephon}/>
                            <a href="tel:84950554698">+996 501 23 03 90</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top_menu;