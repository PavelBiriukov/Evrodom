import { useState } from 'react';

const useShoppingCart = () => {
    const [cartItems, setCartItems] = useState<any>([]);
    console.log(cartItems);
    
    const addToCart = (item: any) => {
        setCartItems([...cartItems, item]);
    };

    return { cartItems, addToCart };
};

export default useShoppingCart;
