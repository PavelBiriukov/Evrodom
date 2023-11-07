import { CartAction, CartActionType, CartState } from "../../type/cartItem";

const initialCartState: CartState = {
    cartItems: [],
    error: '',
};

export const cartReducer = (state = initialCartState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionType.ADD_TO_CART:
            // Проверяем, есть ли товар уже в корзине
            const existingItemIndex = state.cartItems.findIndex(item => item.item._id === action.payload._id);

            if (existingItemIndex !== -1) {
                const updatedCart = [...state.cartItems];
                updatedCart[existingItemIndex].quantity += 1;
                return {
                    ...state,
                    cartItems: updatedCart,
                };
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        {
                            item: action.payload,
                            quantity: 1,
                        },
                    ],
                };
            }

        case CartActionType.REMOVE_FROM_CART:
            const updatedCart = state.cartItems.filter(item => item.item._id !== action.payload);
            return {
                ...state,
                cartItems: updatedCart,
            };

        case CartActionType.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
            
        case CartActionType.ADD_TO_CART_ERROR:
        case CartActionType.REMOVE_FROM_CART_ERROR:
        case CartActionType.CLEAR_CART_ERROR:
            return {
                ...state,
                error: action.payload
            };    

        default:
            return state;
    }
};

