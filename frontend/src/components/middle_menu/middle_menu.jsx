import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import ava from "../../img/miniAva.png";
const Middle_menu = () => {
    return (
        <div className="middle_menu">
            <div className="inner">
                <div className="logo_wrapper">
                    <a href="/" className="logo">
                        <img src={ava} alt="Вкусный хлебушек"/>
                    </a>
                    <p className="slogan">Вкусный хлебушек с бесплатной доставкой по Москве</p>
                </div>

                <div className="search_form">
                    <form method="GET" action="/search/">
                        <input type="text" name="search" id="search" required="required" placeholder="Что будем искать?" title="Поиск по товарам на сайте" autoFocus="" autoComplete="off" value=""/>
                            <button type="submit">
                                <i className="f7-icons">search</i>
                            </button>
                            <div id="autocomplete"></div>
                    </form>
                </div>

                <div className="middle-right">
                    <div className="search_open">
                        <img src="/img/t/taymyr/loupe.svg"/>
                    </div>
                    <div className="login_or_reg">
                        <img src="/img/t/taymyr/user.svg"/>
                            <div className="icon_cont">
                                <a href="/login/">Вход</a>
                                <a href="/registration/">Регистрация</a>
                            </div>

                    </div>

                    <div className="basket">
                        <a href="/basket/">
                            <img src="/img/t/taymyr/shopping-basket.svg"/>
                                <div className="pop_up_count">0</div></a>
                        <div className="icon_cont">
                            <div className="basket-title">Товаров на сумму:</div>
                            <div className="pop_up_price">0 руб.</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle_menu;