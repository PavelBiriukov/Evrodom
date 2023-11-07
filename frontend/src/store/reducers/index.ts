import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { categoriesReducer } from "./categoriesReduser";
import {cartReducer } from "./cartItemsReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
    categories: categoriesReducer,
    cartItems: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>