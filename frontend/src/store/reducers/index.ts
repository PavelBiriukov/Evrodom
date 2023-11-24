import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import basketReducer from "./cartItemsReducer";
import { categoriesReducer } from "./categoriesReduser";
import {userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
    categories: categoriesReducer,
    basket: basketReducer,
    users: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>