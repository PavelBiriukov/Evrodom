import React from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import Header from '../../header/header';
import Footer from '../../footer/footer';
const Contacts = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div class="content nosidebar">
                            <div class="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>Контакты</span>
                            </div>
                            <h1 class="shop-title">Контакты</h1>
                            <div class="page_text">
                                <p><strong>Мы находимся по адресу:</strong></p>
                                <p>г. Кара-Балта ул. Жайыл Батыра 249</p>
                                <p>
                                    <strong>Наши телефоны: 
                                        <ul>
                                            <li>+996 557 23 03 90</li>
                                            <li>+996 501 23 03 90</li>
                                            <li>+996 555 46 28 90</li>
                                        </ul> 
                                    </strong> 
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.56977564010293!2d73.84713809830308!3d42.82427191551872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389f390006dbfe33%3A0xe0c1fceb0596d158!2z0JXQstGA0L7QtNC-0Lw!5e1!3m2!1sru!2skg!4v1709888853847!5m2!1sru!2skg" width="600" height="450" style={{border:0 ,width: '100%', height: '100vh'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

    );
};

export default Contacts;