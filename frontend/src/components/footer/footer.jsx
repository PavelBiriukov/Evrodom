import React from 'react';
import cl from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={cl.block}>
            <div className={cl.inner}>
                <div className={cl.fmenu}>
                    <div className={cl.footer_subtitle}>О магазине</div>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/o-kompanii/">О компании</a></li>
                        <li><a href="/dostavka-i-oplata/">Доставка и оплата</a></li>
                        <li><a href="/kontakty/">Контакты</a></li>
                        <li><a href="/news/" title="Новости">Новости</a></li>
                    </ul>
                </div>
                <div className={[cl.fmenu ,cl.catalog].join(' ')}>
                    <div className={cl.footer_subtitle}>Каталог</div>
                    <ul>
                        <li><a href="/categories/hleba/" title="Хлеб">Хлеб</a></li>
                        <li><a href="/categories/bulochnye-izdeliya/" title="Булочные изделия">Булочные изделия</a></li>
                        <li><a href="/categories/gastronomiya/" title="Гастрономия">Гастрономия</a></li>
                        <li><a href="/categories/konditerskie-izdeliya/" title="Кондитерские изделия">Кондитерские изделия</a></li>
                        <li><a href="/categories/novaya-kategoriya/" title="Печенье">Печенье</a></li>
                    </ul>
                </div>
                <div className={[cl.fmenu ,cl.contact_us].join(' ')}>
                    <div className={cl.footer_subtitle}>Мы на связи</div>
                    <a className={cl.footer_phone} href="tel:84950554698">8-495-055-46-98</a>
                    <div className={cl.social}>
                        <a target="_blank" href="https://vk.com/addshop_ru" className={cl.link_vk}></a>
                        <a target="_blank" href="https://facebook.com/#" className={cl.link_fb}></a>
                        <a target="_blank" href="https://ok.ru/#" className={cl.link_ok}></a>
                        <a target="_blank" href="https://www.instagram.com/#" className={cl.link_instagram}></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCWnayeBedSurHOgZFWa9mtg" className={cl.link_youtube}></a>
                    </div>
                </div>
                <div className={[cl.fmenu ,cl.copylicy].join(' ')}>
                    <div className={cl.copyright}>© 2023 Вкусный хлебушек</div>
                    <div className={cl.footer_site_info}>
                        <p>Используя данный сайт, вы автоматически принимаете условия пользовательского соглашения и соглашаетесь с политикой конфиденциальности.</p>
                    </div>
                    <p className={cl.policy}><a href="/politika-konfidencialnosti/">Политика конфиденциальности</a></p>
                    <p className={cl.user_agreement_link}><a href="/soglasie-na-obrabotku-personalnyh-dannyh/">Согласие на обработку персональных данных</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;