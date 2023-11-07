import { CategoriesAction, CategoriesActionType, CategoriesState } from "../../type/categories";

const initialState: CategoriesState = {
    categories: [],
    error: ''
}
export const categoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case CategoriesActionType.FETCH_CATEGORIES_ERROR:
            return {...state, error: action.payload}
        case CategoriesActionType.FETCH_CATEGORIES:
            return {error: '', categories: action.payload }
        default:
            return state;
    }
}