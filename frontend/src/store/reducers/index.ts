import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { categoriesReducer } from "./categoriesReduser";
import {cartReducer } from "./cartItemsReducer";
import {userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
    categories: categoriesReducer,
    cartItems: cartReducer,
    users: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>