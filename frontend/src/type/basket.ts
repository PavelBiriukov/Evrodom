import { ICard } from "./cards";

export enum BasketActionType {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
    CLEAR_BASKET = 'CLEAR_BASKET',
    ADD_TO_BASKET_ERROR = 'ADD_TO_BASKET_ERROR',
    REMOVE_FROM_BASKET_ERROR = 'REMOVE_FROM_BASKET_ERROR',
    CLEAR_BASKET_ERROR = 'CLEAR_BASKET_ERROR',
    GET_BASKET = 'GET_BASKET',
    GET_BASKET_ERROR = 'GET_BASKET_ERROR',
    UPDATE_BASKET = 'UPDATE_BASKET',
    UPDATE_BASKET_ERROR = 'UPDATE_BASKET_ERROR'
}

export interface IBasketItem {
    _id: string;
    name: string;
    picture: any[]; // Предположим, что это массив строк с URL изображений
    price: number;
}

export interface BasketState {
    userId: string;
    items: any;
    totalPrice: number
    error: string;
}
export interface BasketStateItems {
    userId: string;
    items: any;
    totalPrice: number
}

export interface AddToBasketAction {
    type: BasketActionType.ADD_TO_BASKET;
    payload: BasketStateItems;
}

export interface RemoveFromBasketAction {
    type: BasketActionType.REMOVE_FROM_BASKET;
    payload: BasketStateItems;
}

export interface ClearBasketAction {
    type: BasketActionType.CLEAR_BASKET;
}

export interface AddToErrorBasketAction {
    type: BasketActionType.ADD_TO_BASKET_ERROR;
    payload: string;
}

export interface RemoveErrorFromBasketAction {
    type: BasketActionType.REMOVE_FROM_BASKET_ERROR;
    payload: string;
}

export interface ClearErrorBasketAction {
    type: BasketActionType.CLEAR_BASKET_ERROR;
    payload: string;
}

export interface GetBasketAction {
    type: BasketActionType.GET_BASKET;
    payload: BasketStateItems; // Предположим, что это массив товаров в корзине
}

export interface GetBasketErrorAction {
    type: BasketActionType.GET_BASKET_ERROR;
    payload: string;
}

export interface UpdateBasketAction {
    type: BasketActionType.UPDATE_BASKET;
    payload: BasketStateItems; 
}

export interface UpdateBasketErrorAction {
    type: BasketActionType.UPDATE_BASKET_ERROR;
    payload: string;
}

export type BasketAction =
    | AddToBasketAction
    | RemoveFromBasketAction
    | ClearBasketAction
    | AddToErrorBasketAction
    | RemoveErrorFromBasketAction
    | ClearErrorBasketAction
    | GetBasketErrorAction
    | GetBasketAction
    | UpdateBasketAction
    | UpdateBasketErrorAction;
