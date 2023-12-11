import { IBasketItem } from "./basket";

export enum OrdersActionType {
    FETCH_ORDERS = 'FETCH_ORDERS',
    DELETE_ORDERS = 'DELETE_ORDERS',
    GET_ONE_ORDERS = 'GET_ONE_ORDERS',
    GET_ALL_ORDERS = 'GET_ALL_ORDERS',
    FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR',
    DELETE_ORDERS_ERROR = 'DELETE_ORDERS_ERROR',
    GET_ONE_ORDERS_ERROR = 'GET_ONE_ORDERS_ERROR',
    GET_ALL_ORDERS_ERROR = 'GET_ALL_ORDERS_ERROR',
}
export interface IOrders {
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
    products: IBasketItem[]
}
export interface OrdersGetAll {
    orders: IOrders[];
}

export interface OrdersState {
    orders: IOrders;
    error: string; 
}

export interface DeleteOrdersAction {
    type: OrdersActionType.DELETE_ORDERS;
}

export interface DeleteOrdersErrorAction {
    type: OrdersActionType.DELETE_ORDERS_ERROR;
    payload: string;
}

export interface FetchOrdersAction {
    type: OrdersActionType.FETCH_ORDERS;
    payload: IOrders;
}

export interface FetchOrdersErrorAction {
    type: OrdersActionType.FETCH_ORDERS_ERROR;
    payload: string;
}

export interface GetAllOrdersAction {
    type: OrdersActionType.GET_ALL_ORDERS
    payload: IOrders;
}

export interface GetAllOrdersErrorAction {
    type: OrdersActionType.GET_ALL_ORDERS_ERROR;
    payload: string;
}

export interface GetOneOrdersAction {
    type: OrdersActionType.GET_ONE_ORDERS;
    payload: IOrders; 
}

export interface GetOneOrdersErrorAction {
    type: OrdersActionType.GET_ONE_ORDERS_ERROR;
    payload: string;
}

export type OrdersAction =
    | DeleteOrdersAction
    | DeleteOrdersErrorAction
    | FetchOrdersAction
    | FetchOrdersErrorAction
    | GetAllOrdersAction
    | GetAllOrdersErrorAction
    | GetOneOrdersAction
    | GetOneOrdersErrorAction;
