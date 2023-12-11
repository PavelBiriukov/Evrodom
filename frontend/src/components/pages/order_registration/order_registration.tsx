import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import imgMap from '../../../img/icon/free-icon-font-map-marker-5074235.png';
import imgDelivery from '../../../img/icon/free-icon-font-truck-side-5074368_.png';
import imgPayment from '../../../img/icon/free-icon-font-donate-7653448.png';
import imgPerson from '../../../img/icon/free-icon-font-user-pen-10416185.png';
import { ICard } from '../../../type/cards';
import useActions from '../../../hooks/useAcrions';

interface FormData {
    region: string;
    city: string;
    address: string;
    lname: string;
    name: string;
    mname: string;
    phone: string;
    email: string;
    comment: string;
    totalAmount: number;
    deliveryMethod: string;
    paymentMethod: string;
    data: string;
    products: ICard[]
}
const Order_registration = () => {
    const { items, totalPrice } = useTypedSelector(state => state.basket);
    const [totalAmount, setTotalAmount] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');
    const {orderCreate} = useActions()
    const [formData, setFormData] = useState<FormData>({
        region: '',
        city: '',
        address: '',
        lname: '',
        name: '',
        mname: '',
        phone: '',
        email: '',
        comment: '',
        totalAmount: 0,
        deliveryMethod: '',
        paymentMethod: '',
        data: '',
        products: []
    });  

    const choiceOfDelivery = (deliveryType: string) => {
        if (deliveryType === 'Самовывоз') {
            // Самовывоз
            setTotalAmount(totalPrice);
            setDeliveryCost(0)
            setDeliveryMethod('Самовывоз')
        } else if (deliveryType === 'Курьером') {
            // Курьером
            setDeliveryCost(0)
            setDeliveryMethod('Курьером')
        }
    }

    const handlePaymentMethodChange = (methodType: string) => {
        const method = methodType === 'Наличные' ? 'Наличные' : 'Банковской картой';
        setPaymentMethod(method);
    };

    useEffect(() => {
        setTotalAmount(totalPrice)
    }, [totalPrice])

    useEffect(() => {
        setFormData(
            {   
                ...formData, 
                totalAmount: totalAmount,
                deliveryMethod: deliveryMethod,
                paymentMethod: paymentMethod,
                data: new Date().toLocaleString(),
                products: items
            })
    },[totalAmount, deliveryMethod, paymentMethod])

    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        // Проверка на заполнение всех обязательных полей
        if (
            formData.region.trim() === '' ||
            formData.city.trim() === '' ||
            formData.address.trim() === '' ||
            formData.lname.trim() === '' ||
            formData.name.trim() === '' ||
            formData.mname.trim() === '' ||
            formData.phone.trim() === '' ||
            formData.email.trim() === '' || 
            formData.deliveryMethod.trim() === '' || 
            formData.paymentMethod.trim() === '' || 
            formData.totalAmount === 0 

        ) {
            // Если какое-то из обязательных полей не заполнено, вы можете обработать это событие, например, показав сообщение об ошибке.
            console.error('Пожалуйста, заполните все обязательные поля.');
            setError('Пожалуйста, заполните все обязательные поля.')
            return;
        }
    
        // Проверка на корректность email (можете использовать регулярное выражение)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            console.error('Пожалуйста, введите корректный адрес электронной почты.');
            setError('Пожалуйста, введите корректный адрес электронной почты.')
            return;
        }
        
        setError('Отправка формы...')
        // Все проверки пройдены, можно отправлять данные или выполнять другие действия
        console.log('Данные формы корректны:', formData);
        orderCreate(formData)
    };
    
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className="block main">
                    <div className="inner">
                        <div className="content nositebar ">
                            <div className="checkout-inner">
                                <div className="breadcrumb">
                                    <span><a href="/">Главная</a> / </span>
                                    <span>Корзина</span>
                                </div>
                                <h1 className="shop-title">Оформление заказа</h1>
                                <div className="order_container">
                                    <div id="checkout_form">
                                        <form method="POST" onSubmit={handleSubmit}>
                                            <input name="visible_amount" type="hidden" value="369.00" />
                                            <input name="promo_title" type="hidden" value="" />
                                            <input name="customer_id" type="hidden" value="" />
                                            <div className="user_type">
                                                <div className="title">
                                                    <img src={imgMap} alt="карта"  style={{width: '32px', marginRight: '25px'}}/>
                                                    Адрес для доставки
                                                </div>
                                                {/*
                                                <div className="field radios">
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">Физическое лицо</div>
                                                        <input data-type="fiz" name="customer_type" type="radio" value="fl" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">Юридическое лицо</div>
                                                        <input data-type="ur" name="customer_type" type="radio" value="ul" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Страна <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <div className="select">
                                                            <div className="styledSelect">Киргизия</div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="field">
                                                    <div className="field_title">Введите регион <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input type="text" placeholder="Введите регион" name="region" value={formData.region} onChange={(e) => setFormData({ ...formData, region: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Введите город <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input type="text" placeholder="Введите название города" name="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Укажите адрес доставки<sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input type="text" placeholder="Укажите улицу и номер дома" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="delivery_pay ">
                                                <div className="delivery radios">
                                                    <div className="title">
                                                        <img src={imgDelivery} alt="доставка" style={{width: '32px', marginRight: '25px'}}/>
                                                        Способ доставки
                                                    </div>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">
                                                            <span>Самовывоз</span>
                                                            <div className="delivery_pay_subtext"></div>
                                                        </div>
                                                        
                                                        <input onChange={() => choiceOfDelivery('Самовывоз')} type="radio" name="delivery_type" id="delivery_type" value="9207" data-price="0.00" data-ship_cost_after="0" data-delivery_system_id="0" data-action="cdek_get_regions" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">
                                                            <span>Курьером</span>
                                                            <div className="delivery_pay_subtext"></div>
                                                        </div>
                                                        
                                                        <input onChange={() => choiceOfDelivery('Курьером')} type="radio" name="delivery_type" id="delivery_type" value="9208" data-price="390.00" data-ship_cost_after="0" data-delivery_system_id="0" data-action="cdek_get_regions" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="pay radios">
                                                    <div className="title">
                                                        <img src={imgPayment} alt="Способ оплаты" style={{width: '32px', marginRight: '25px'}}/>
                                                        Способ оплаты
                                                    </div>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">
                                                            Наличные
                                                        </div>
                                                        <input onChange={() => handlePaymentMethodChange('Наличные')} type="radio" name="payment_type" value="4717" data-markup="0.00" data-dts="[9207,9208]" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">
                                                            Банковской картой
                                                        </div>
                                                        <input onChange={() => handlePaymentMethodChange('Банковской картой')} type="radio" name="payment_type" value="4717" data-markup="0.00" data-dts="[9207,9208]" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">
                                                            Электронный кошелёк
                                                        </div>
                                                        <input onChange={() => handlePaymentMethodChange('Электронный кошелёк')} type="radio" name="payment_type" value="4717" data-markup="0.00" data-dts="[9207,9208]" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="user_data">
                                                <div className="title">
                                                    <img src={imgPerson} alt="Ваши данные" style={{width: '32px', marginRight: '25px'}}/>
                                                    Введите Ваши данные
                                                </div>
                                                <input name="action" type="hidden" value="checkout" />
                                                <div className="field">
                                                    <div className="field_title">Введите фамилию <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Введите фамилию"
                                                            name="lname"
                                                            value={formData.lname} 
                                                            onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Введите имя <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Введите имя"
                                                            name="fname"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Введите отчество <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Введите отчество"
                                                            name="mname"
                                                            value={formData.mname}
                                                            onChange={(e) => setFormData({ ...formData, mname: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Укажите номер телефона <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Введите телефон"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="field_title">Укажите E-mail <sup style={{fontSize: '21px',color: 'red'}}>*</sup></div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            placeholder="Введите E-mail"
                                                            name="email"
                                                            value={formData.email} 
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field full">
                                                    <div className="field_title">Комментарии к заказу</div>
                                                    <div>
                                                        <textarea
                                                            name="comment"
                                                            value={formData.comment} 
                                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <input name="offers" type="hidden" />
                                                <div className="descr">
                                                    <sup style={{fontSize: '21px',color: 'red'}}>*</sup>
                                                    {error || 'Поля обязательные для заполнения'}
                                                </div>
                                                <div className="field btn_wrapper">
                                                    <input type="submit" value="Оформить заказ" />
                                                    <label className="checkbox_container">
                                                        <div className="radio_title">Согласен с условиями:
                                                            <a href="/politika-konfidencialnosti/"> Политика конфиденциальности</a>
                                                            <br />
                                                            <a href="/soglasie-na-obrabotku-personalnyh-dannyh/">Согласие на обработку персональных данных</a>
                                                        </div>
                                                        <input name="agreement" value="0" type="hidden" />
                                                        <input name="agreement" value="1" type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="order_total">
                                        <div className="head">
                                            <span>Ваш заказ</span>
                                            <a href="/basket/">Изменить</a>
                                        </div>
                                        <div className="info">
                                            <div className="good_count">
                                                <i>Товаров</i>
                                                <span>{items.length}</span>
                                            </div>
                                            <div className="clear_sum">
                                                <i>На сумму</i>
                                                <span>{totalPrice}</span>
                                            </div>
                                            {/* <div className="delivery">
                                                <i>Доставка</i>
                                                <span>{deliveryCost} сом.</span>
                                            </div> */}
                                            {/* <div className="payment">
                                                <i>Комиссия</i>
                                                <span>0.00 руб.</span>
                                            </div>
                                            <div className="discount" data-discount="">
                                                <i>Скидка</i>
                                                <span>0.00 руб.</span>
                                            </div> */}
                                        </div>
                                        <div className="foot">
                                            <i>Итого <span className="total_without_delivery_note"></span></i>
                                            <div id="basket_summary">{totalAmount}сом.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Order_registration;