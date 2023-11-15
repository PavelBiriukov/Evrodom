import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useActions from '../../hooks/useAcrions';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { login} = useActions();
    const history = useNavigate();
    const handlLogin = async () => {
        try {
            await login(email, password);
            history('/')
        } catch (error) {
            console.error('Ошибка при входе в аккаунт:', error);
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
                                    <span><a href="/">Главная</a> / </span>
                                    <span>Вход</span>
                                </div>
                                <h1 className="shop-title">Вход</h1>
                                <div className="registration_login_wrapper">
                                    <div className="form">
                                        <div>
                                            <input type="hidden" name="action" value="login" />
                                            <div className="field">
                                                <input
                                                    name="customer_email"
                                                    autoComplete="off"
                                                    autoCapitalize="none"
                                                    type="email"
                                                    placeholder="Укажите Ваш E-mail"
                                                    onChange={e => setEmail(e.target.value)}
                                                    value={email} 
                                                />
                                                <div className="field_title">Введите Ваш E-mail <sup>*</sup></div>
                                            </div>
                                            <div className="field">
                                                <input
                                                    name="customer_password_first"
                                                    autoComplete="off"
                                                    autoCapitalize="none"
                                                    type="password"
                                                    placeholder="Укажите Ваш пароль"
                                                    onChange={e => setPassword(e.target.value)}
                                                    value={password}
                                                />
                                                <div className="field_title">Пароль <sup>*</sup></div>
                                            </div>

                                            <div className="btn_wrapper login">
                                                <button onClick={handlLogin}>Войти</button>
                                                <a href="/forgot-password/">Забыли пароль?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="registr_descr">
                                        <div className="title">Я – новый покупатель</div>
                                        <p>Регистрация на сайте позволит быстро оформлять заказы, управлять заказами через личный кабинет, в полном объеме использовать возможности нашего интернет магазина.</p>
                                        <a href="/registration/">Зарегистрироваться</a>
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

export default Login;