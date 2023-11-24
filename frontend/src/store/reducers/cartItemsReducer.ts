import localforage from "localforage";
import { BasketAction, BasketActionType, BasketState } from "../../type/basket";


const initialState: BasketState = {
    userId: '', // Здесь может быть идентификатор пользователя
    items: [],
    totalPrice: 0,
    error: ''
};

const basketReducer = (state = initialState, action: BasketAction): BasketState => {
    switch (action.type) {
        case BasketActionType.ADD_TO_BASKET:
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        case BasketActionType.REMOVE_FROM_BASKET:
            console.log(state);
            console.log(action.payload);
            return {
                ...state,
                items: state.items.filter((item: any) => item._id !== action.payload),
            };

        case BasketActionType.CLEAR_BASKET:
            return {
                ...state,
                items: [],
            };
        case BasketActionType.GET_BASKET:
            return {
                ...state,
                items: action.payload.items,
                totalPrice: action.payload.totalPrice,
                userId: action.payload.userId,
            };
        case BasketActionType.ADD_TO_BASKET_ERROR:
        case BasketActionType.CLEAR_BASKET_ERROR:
        case BasketActionType.GET_BASKET_ERROR:
        case BasketActionType.REMOVE_FROM_BASKET_ERROR:
            return { ...state, error: action.payload || state.error }; // Обработка всех действий, связанных с ошибками
        default:
            return state;
    }
};

export default basketReducer;
