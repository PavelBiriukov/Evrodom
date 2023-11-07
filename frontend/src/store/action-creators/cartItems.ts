import { Dispatch } from "react";
import { ICard } from "../../type/cards";
import { CartAction, CartActionType } from "../../type/cartItem";

export const addToCart = (item: ICard) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionType.ADD_TO_CART, payload: item });
        } catch (error) {
            dispatch({
                type: CartActionType.ADD_TO_CART_ERROR,
                payload: 'Произошла ошибка при добавлении товара в корзину'
            });
        }
    };
};

export const removeFromCart = (itemId: string) => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionType.REMOVE_FROM_CART, payload: itemId });
        } catch (error) {
            dispatch({
                type: CartActionType.REMOVE_FROM_CART_ERROR,
                payload: 'Произошла ошибка при удалении товара из корзины'
            });
        }
    };
};

export const clearCart = () => {
    return async (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({ type: CartActionType.CLEAR_CART });
        } catch (error) {
            dispatch({
                type: CartActionType.CLEAR_CART_ERROR,
                payload: 'Произошла ошибка при очистке корзины'
            });
        }
    };
};
