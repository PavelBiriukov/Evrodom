import React from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import Header from '../../header/header';
import Footer from '../../footer/footer';
const About_company = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>О компании</span>
                            </div>
                            <h1 className="shop-title">О компании</h1>
                            <div className="page_text"><p>Наша компания работает с 2010 года.</p>
                                <p>При производстве используются только качественные материалы фабричного производства.</p>
                                <p><img alt="" src="/img/800x0/2287/upload/pexels-gil-goldman-1555813_16303911926226.jpg" style={{width: '100%'}}/></p>
                                <p>Преимущества нашей компании:</p>
                                <ul>
                                    <li>доступные цены;</li>
                                    <li>качественная одежда, отвечающая самым высоким требованиям;</li>
                                    <li>постоянно обновляющийся ассортимент;</li>
                                    <li>широкий размерный ряд;</li>
                                    <li>удобные способы оплаты;</li>
                                    <li>доставка по РФ</li>
                                </ul>
                                <p>Наш оптовый покупатель будет доволен индивидуальным подходом и выгодными ценами.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default About_company;