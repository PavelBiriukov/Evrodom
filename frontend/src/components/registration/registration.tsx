import React, { FC, useState } from 'react';
import useActions from '../../hooks/useAcrions';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useNavigate  } from 'react-router-dom';
const RegistrationForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {registration } = useActions();
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [captchaValue, setCaptchaValue] = useState<string>('');
    const history = useNavigate ();
    const handleRegistration = async () => {
        try {
            if (password === confirmPassword && captchaValue === '30397') {
                // Пароли совпадают и введен код с картинки, выполни регистрацию
                await registration(email, password);
                history('/');
            } else {
                // Выведи сообщение об ошибке
                console.error('Пароли не совпадают или не введен код с картинки');
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <div className="block main">
                    <div className="inner">
                        <div className="content nositebar ">
                            <div className="auth-inner">
                                <div className="breadcrumb">
                                    <span>
                                        <a href="/">Главная</a> /
                                    </span>
                                    <span>Регистрация</span>
                                </div>
                                <h1 className="shop-title">Регистрация</h1>
                                <div className="registration_login_wrapper">
                                    <div className="form">
                                        <div>
                                            <input type="hidden" name="action" value="registr" />
                                            <div className="field">
                                                <input
                                                    name="customer_email"
                                                    autoComplete='false'
                                                    type="email"
                                                    placeholder="Укажите Ваш E-mail"
                                                    onChange={e => setEmail(e.target.value)}
                                                    value={email}
                                                />
                                                <div className="field_title">Укажите Ваш E-mail
                                                    <sup>*</sup>
                                                </div>
                                                <i className="far fa-envelope"></i>
                                            </div>
                                            <div className="field">
                                                <input
                                                    name="customer_password_first"
                                                    autoComplete="false"
                                                    type="password"
                                                    placeholder="Придумайте пароль"
                                                    onChange={e => setPassword(e.target.value)}
                                                    value={password}
                                                />
                                                <div className="field_title">Придумайте пароль
                                                    <sup>*</sup>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <input
                                                    name="customer_password"
                                                    autoComplete="false"
                                                    type="password"
                                                    placeholder="Повторите пароль"
                                                    onChange={e => setConfirmPassword(e.target.value)}
                                                    value={confirmPassword} 
                                                />
                                                <div className="field_title">Повторите пароль
                                                    <sup>*</sup>
                                                </div>
                                            </div>
                                            <img src="data:image/png;base64,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" alt="captcha code" title="" />
                                            <input type="hidden" name="captcha_hash" value="mkWuNzk7LLPxxQh7o+qoZtxv3I07kkz26gVthCD8PdthKXmfGsKo2rOpYu32xSRGYA2jnJs20/iYoS7K9WoFtA==" />
                                            <input
                                                type="text"
                                                name="captcha_value"
                                                placeholder="Введите код с картинки"
                                                value={captchaValue}
                                                onChange={(e) => setCaptchaValue(e.target.value)}
                                            />
                                            <div className="btn_wrapper">
                                                <button onClick={handleRegistration}>Зарегистрировать</button>
                                                <label className="checkbox_container">
                                                    <div className="radio_title">Согласен(на) на обработку персональных данных</div>
                                                    <input type="checkbox" name="agreement" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="registr_descr">
                                        <div className="title">Зачем нужна регистрация?</div>
                                        <p>Зарегистрировавшись на сайте, Вы сможете получить личный кабинет, что позволит Вам отслеживать историю заказов, быстрее оформлять заказы в нашем Интернет магазине. Вся информация о Вас будет доступна в любое время, и ее не нужно будет вводить повторно.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>  
            <Footer/>  
        </div>
    );
};

export default RegistrationForm;
