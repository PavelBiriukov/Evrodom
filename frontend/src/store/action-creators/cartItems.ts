import axios from "axios";
import { Dispatch } from "react";
import { BasketAction, BasketActionType } from "../../type/basket";

export const addToBasket = (item: any,) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/users/basket/add', item);
            // Асинхронные операции, если необходимо
            console.log(response.data);
            dispatch({ type: BasketActionType.ADD_TO_BASKET, payload: response.data });
        } catch (error) {
            dispatch({
                type: BasketActionType.ADD_TO_BASKET_ERROR,
                payload: `Произошла ошибка при добавлении товара в корзину: ${error}`
            });
        }
    };
};

export const updateBasketAction = (basketItems: any) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/users/basket/update', basketItems);
            dispatch({ type: BasketActionType.UPDATE_BASKET, payload: response.data });
        } catch (error) {
            dispatch({
                type: BasketActionType.UPDATE_BASKET_ERROR,
                payload: `Произошла ошибка при обновлении корзины: ${error}`
            });
        }
    };
};

export const removeFromCart = (items: any, itemId: string) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/users/basket/remove', {items, itemId});
            
            dispatch({ type: BasketActionType.REMOVE_FROM_BASKET, payload: response.data});
        } catch (error) {
            dispatch({
                type: BasketActionType.REMOVE_FROM_BASKET_ERROR,
                payload: `Произошла ошибка при удалении товара из корзины: ${error}`
            });
        }
    };
};

export const clearCart = (id: string) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            const response = await axios.post(`http://localhost:5000/users/basket/clear/${id}`);
            dispatch({ type: BasketActionType.CLEAR_BASKET });
        } catch (error) {
            dispatch({
                type: BasketActionType.CLEAR_BASKET_ERROR,
                payload: `Произошла ошибка при очистке корзины: ${error}`
            });
        }
    };
};

export const getBasket = (userId: string) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            const response = await axios.get(`http://localhost:5000/users/basket/user/${userId}`);
            console.log(response.data);
            
            dispatch({ type: BasketActionType.GET_BASKET, payload: response.data });
        } catch (error) {
            dispatch({
                type: BasketActionType.GET_BASKET_ERROR,
                payload: `Произошла ошибка при получении товаров из корзины: ${error}`
            });
        }
    };
};
