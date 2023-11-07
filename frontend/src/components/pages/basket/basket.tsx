import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../type/cards';
import { ICartItem } from '../../../type/cartItem';
import Footer from '../../footer/footer';
import Header from '../../header/header';

const Basket = () => {
    const { cartItems } = useTypedSelector(state => state.cartItems);
    const [cartLength, setCartLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        // При изменении cartItems пересчитываем общую стоимость товаров
        setCartLength(cartItems.reduce((acc, item) => acc + item.quantity, 0));
        let totalPrice = 0;
        if (cartItems.length > 0) {
            totalPrice = cartItems.reduce((acc: number, cartItem: ICartItem) => {
                const price = parseFloat(cartItem.item.price); // Предполагаем, что цена товара является числом
                const quantity = cartItem.quantity;
                return acc + (price * quantity);
            }, 0);
        }
        setTotalPrice(totalPrice);
    }, [cartItems]);

    function getTotalQuantity(cartItems: ICartItem[], item: ICard): number {
        return cartItems.reduce((total: number, cartItem: ICartItem) => {
            if (cartItem.item._id === item._id) {
                return total + cartItem.quantity;
            }
            return total;
        }, 0);
    }
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className="block main">
                    <div className="inner">
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span>
                                    <a href="/">Главная</a>
                                    /
                                </span>
                                <span>Корзина</span>
                            </div>
                            <h1 className="shop-title">Корзина</h1>
                            <div className="promo-descr" ></div>
                            <div id="basket_list">
                                <div className="basket_item_wrapp">
                                    <div className="item_in_basket_titles">
                                        <div className="title">Наименование товара</div>
                                        <div className="img"></div>
                                        <div className="price">Цена</div>
                                        <div className="quantity">Количество</div>
                                        <div className="total">Стоимость</div>
                                        <div className="remove" data-index="0"></div>
                                    </div>
                                    {cartItems && cartItems.length > 0 ? (
                                        cartItems.map((item: any, index: number) => (
                                            <div className="item_in_basket">
                                                <div className="image">
                                                    <img src={`http://localhost:5000/${item.item.picture[0]}`} />
                                                </div>
                                                <div className="title">
                                                    <a href={`/items/${item.item._id}`}>
                                                        {item.item.name}
                                                    </a>
                                                    <br />
                                                    <span className="v_code">Код товара: {item.item._id}</span>
                                                    <span className="v_code"></span>
                                                </div>
                                                <div className="price">
                                                    <div> </div>
                                                    <span className="">{item.item.price} сом.
                                                        <span></span>
                                                    </span>
                                                </div>
                                                <div className="quantity">
                                                    <div className="count">
                                                        <div className="count_minus">-</div>
                                                        <input data-index="0" type="text" name="quantity" className="number_input" value="1.00" min="1.00" step="1.00" max="100.00" />
                                                        <div className="count_plus">+</div>
                                                    </div>
                                                </div>
                                                <div className="total">
                                                    <div className="total_new"></div>
                                                    <span className="">сом.</span>
                                                </div>
                                                <div className="">  </div>
                                            </div>
                                        )))
                                        :
                                        (<div className={`empty-cart-message`}>Корзина пуста</div>)
                                    }
                                </div>
                                <div className="basket_end">
                                    {/* <div className="left">
                                <div className="promo">
                                    <form method="POST" id="apply_promo">
                                        <input name="action" type="hidden" value="apply_promo"/>
                                        <input type="text" name="promo" className="promo" value="" placeholder="Введите промокод ..."/>
                                        <button className="get_promo">Применить</button>
                                    </form>
                                </div>
                            </div> */}
                                    <div className="right">
                                        <div className="total_basket_wrapp">
                                            <span>Итоговая сумма: </span>
                                            <span id="basket_total">
                                                <span className="">{totalPrice}</span>
                                                &nbsp;
                                            </span> сом.
                                        </div>
                                        <a className="checkout_btn" href="/checkout/">Оформить заказ</a>
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

export default Basket;