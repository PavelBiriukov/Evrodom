import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import basketReducer from "./cartItemsReducer";
import { categoriesReducer } from "./categoriesReduser";
import { OrdersReducer } from "./ordersReduser";
import {userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
    categories: categoriesReducer,
    basket: basketReducer,
    users: userReducer,
    orders: OrdersReducer,
})

export type RootState = ReturnType<typeof rootReducer>