import axios from 'axios';
import { Dispatch} from 'react';
import { IOrders, OrdersAction, OrdersActionType } from '../../type/orders';

export const orderCreate = (order: IOrders) => {
    return async (dispatch: Dispatch<OrdersAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/orders', order);
            console.log(response.data);

            dispatch({ type: OrdersActionType.FETCH_ORDERS, payload: response.data });
        } catch (error) {
            dispatch({
                type: OrdersActionType.FETCH_ORDERS_ERROR,
                payload: 'Произошла ошибка при загрузке заказов',
            });
        }
    };
};
