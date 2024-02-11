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
                    </ul>
                </div>
                <div className={[cl.fmenu, cl.catalog].join(' ')}>
                    <div className={cl.footer_subtitle}>Каталог</div>
                    <ul>
                        <li><a href="/categories/hleba/" title="Двери">Двери</a></li>
                        <li><a href="/categories/bulochnye-izdeliya/" title="Линолиум">Линолиум</a></li>
                        <li><a href="/categories/gastronomiya/" title="САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ">Сайденг виниловый фосадный</a></li>
                        <li><a href="/categories/konditerskie-izdeliya/" title="ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ">Пластик потолочный пвх</a></li>
                        <li><a href="/categories/novaya-kategoriya/" title="МДФ ПАНЕЛИ">Мдф панели</a></li>
                    </ul>
                </div>
                <div className={[cl.fmenu, cl.contact_us].join(' ') }>
                    <div className={cl.footer_subtitle}>Мы на связи</div>
                    <div  style={{display:'flex', flexDirection: 'column'}}>
                        <a className={cl.footer_phone} href="tel:84950554698">+996 501 23 03 90</a>
                        <a className={cl.footer_phone} href="tel:84950554698">+996 557 23 03 90</a>
                        <a className={cl.footer_phone} href="tel:84950554698">+996 555 46 28 90</a>
                        {/* <a className={cl.footer_phone} href="tel:84950554698">+996 555 46 28 90</a> */}
                    </div>

                    <div className={cl.social}>
                        <a target="_blank" href="https://vk.com/addshop_ru" className={cl.link_vk}></a>
                        <a target="_blank" href="https://facebook.com/#" className={cl.link_fb}></a>
                        <a target="_blank" href="https://ok.ru/#" className={cl.link_ok}></a>
                        <a target="_blank" href="https://www.instagram.com/#" className={cl.link_instagram}></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCWnayeBedSurHOgZFWa9mtg" className={cl.link_youtube}></a>
                    </div>
                </div>
                <div className={[cl.fmenu,cl.fmenu_soglaheniy, cl.copylicy].join(' ')}>
                    <div className={cl.copyright}>© 2023 Евродом</div>
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