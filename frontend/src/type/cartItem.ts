import { ICard } from "./cards";

export interface ICartItem {
    item: ICard;
    quantity: number;
}

export interface CartState {
    cartItems: ICartItem[];
    error: string;
}

export enum CartActionType {
    ADD_TO_CART = 'ADD_TO_CART',
    ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR',
    CLEAR_CART = 'CLEAR_CART',
    CLEAR_CART_ERROR = 'CLEAR_CART_ERROR',
    // Другие возможные действия для корзины
}

interface AddToCartAction {
    type: CartActionType.ADD_TO_CART;
    payload: ICard;
}

interface RemoveFromCartAction {
    type: CartActionType.REMOVE_FROM_CART;
    payload: string; // Или другой идентификатор товара
}

interface ClearCartAction {
    type: CartActionType.CLEAR_CART;
}

interface AddToCartErrorAction {
    type: CartActionType.ADD_TO_CART_ERROR;
    payload: string;
}

interface RemoveFromCartErrorAction {
    type: CartActionType.REMOVE_FROM_CART_ERROR;
    payload: string; // Или другой идентификатор товара
}

interface ClearCartErrorAction {
    type: CartActionType.CLEAR_CART_ERROR;
    payload: string;
}

export type CartAction = 
    AddToCartAction | 
    RemoveFromCartAction | 
    ClearCartAction |
    AddToCartErrorAction |
    RemoveFromCartErrorAction|
    ClearCartErrorAction;
