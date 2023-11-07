import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICard } from '../../type/cards';
import { ICartItem } from '../../type/cartItem';
import cl from './basket_popup_wrapper.module.css';

interface PopupProps {
    style: boolean;
    handleClosePopup: () => void;
}

const Basket_popup_wrapper: React.FC<PopupProps> = ({ style, handleClosePopup }) => {
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
    console.log(cartItems[0]?.item);
    
    return (
        <div className={cl.basket_popup_wrapper} style={{ display: style ? 'block' : 'none' }}>
            <div className={cl.basket_popup}>
                <div onClick={handleClosePopup} className={cl.close}>✕</div>
                <div className={cl.items}>
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((item: any, index: number) => (
                            <div key={index} className={cl.item_in_basket}>
                                <a className={cl.a} href={`/items/${item.item._id}`}>
                                    <div className={cl.image}>
                                        {item.item.picture && item.item.picture.length > 0 && (
                                            <img className={cl.img} style={{height: '65px'}} src={`http://localhost:5000/${item.item.picture[0]}`} />
                                        )}
                                    </div>
                                    <div className={cl.descr}>
                                        <div className={cl.title}>{item.item.name}</div>
                                        <div className={cl.quantity_prise}>Количество: {getTotalQuantity(cartItems, item.item)}</div>
                                        <div className={cl.quantity_prise}>{`Цена: ${item.item.price} сом.`}</div>
                                        {/* <div className={cl.price_new">Цена со скидкой: 37.05 руб.</div> */}
                                    </div>
                                </a>
                            </div>
                        )))
                        :
                        (<div className={`empty-cart-message`}>Корзина пуста</div>)
                    }
                </div>
                <div className={cl.itogo}>
                    <div className='total'>Итого: {totalPrice} сом.
                        {/* <span className={cl.discount_exist">{totalPrice}</span> */}
                    </div>
                    <div className={cl.btns}>
                        <a href="/basket/">Корзина</a>
                        <a href="/checkout/">Оформить</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket_popup_wrapper;
