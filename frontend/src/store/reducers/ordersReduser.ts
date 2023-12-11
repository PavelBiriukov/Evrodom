import { IOrders, OrdersAction, OrdersActionType, OrdersState } from "../../type/orders";

const initialState: OrdersState = {
    orders: {} as IOrders,
    error: ''
}
export const OrdersReducer = (state = initialState, action: OrdersAction): OrdersState => {
    switch (action.type) {
        case OrdersActionType.DELETE_ORDERS:
            return {...state, error: 'Удаление прошло успешно'}
        case OrdersActionType.FETCH_ORDERS:
            return {error: '', orders: action.payload }
        case OrdersActionType.GET_ALL_ORDERS:
            return {error: '', orders: action.payload }
        case OrdersActionType.GET_ONE_ORDERS:
            return {error: '', orders: action.payload }
        default:
            return state;
    }
}