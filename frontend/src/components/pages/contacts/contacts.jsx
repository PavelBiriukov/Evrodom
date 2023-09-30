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
                                <iframe allowfullscreen="" height="450" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.758753136317!2d37.29814801592491!3d55.606212180514405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b553fc9d6f0917%3A0xe6b6b79e91cb1bf5!2z0YPQuy4g0KbQtdC90YLRgNCw0LvRjNC90LDRjywgMSwgMTM0LCDQktC90YPQutC-0LLQviwg0JzQvtGB0LrQstCwLCAxMTkwMjc!5e0!3m2!1sru!2sru!4v1630391279872!5m2!1sru!2sru" style={{border:'0', width:"100%"}}></iframe>
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