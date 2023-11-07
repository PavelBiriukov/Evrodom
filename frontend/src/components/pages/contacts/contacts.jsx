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
                                <p>Заполните контактные данные ниже. При необходимости можете добавить карту расположения вашей компании</p>
                                <p><strong>Мы находимся по адресам:</strong></p>
                                <p>428099, Москва, ул. Центральная 1, офис 134</p>
                                <p>422984, Чебоксары, ул. Ленина 2, офис 242</p>
                                <p><strong>Наш телефон:</strong> 8-800-000-00-00</p>
                                <iframe allowfullscreen="" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.3212371974854!2d73.8471229233014!3d42.8242855537232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389f38794e26b4bf%3A0x9ba61178d7d113d2!2z0JrQsNGE0LUg0JDQu9C10LrRgQ!5e1!3m2!1sru!2skg!4v1698069028843!5m2!1sru!2skg" style={{border:'0', width:"100%"}}></iframe>
                                
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