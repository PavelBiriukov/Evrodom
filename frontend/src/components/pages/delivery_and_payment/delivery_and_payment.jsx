import React from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import Footer from '../../footer/footer';
import Header from '../../header/header';
const Delivery_and_payment = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>Доставка и оплата</span>
                            </div>
                            <h1 className="shop-title">Доставка и оплата</h1>
                            <div className="page_text"><h3>СЛУЖБА ДОСТАВКИ</h3>
                                <p>
                                    Доставка осуществляется как в черте города Карабалта, так и за его пределами от 250сом.
                                    Доставка осуществляется в течении рабочего времени.
                                    Оплата за приобретённый товар производится наличным и безналичным расчётом. Принимается оплата через карты банков Кыргызстана VISA, MASTERCARD, ЭЛЬКАРТ, через платёжные системы: MБанк, Optima24, О!Деньги, MECAPAY.
                                    При оплате через POS-терминал МБанка по QR коду кэшбек до 2%.
                                    
                                    <p>
                                        Адрес: г.Карабалта ул.Жайыл Баатыра 249
                                        <ul>
                                            <li>+996 (557) 23-03-90 Даниил</li>
                                            <li>+996 (555) 46-28-90 Владимир</li>
                                        </ul>
                                    </p>
                                        
                                    
                                    Режим работы: с 9:00 до 17: 00 все дни, <span style={{color: 'red'}}>кроме субботы</span>.
                                </p>
                                
                            </div>
                        </div >
                    </div>
                </div>
            </main>
            <Footer />

        </div>
    );
};

export default Delivery_and_payment;