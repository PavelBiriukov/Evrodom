export interface ICategories {
    name: string;
    picture: string;
    _id: string;
}

export interface CategoriesState {
    categories: ICategories[];
    error: string; 
}

export enum CategoriesActionType {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}

interface FetchCategoriesAction {
    type: CategoriesActionType.FETCH_CATEGORIES;
    payload: ICategories[];
}

interface FetchCategoriesErrorAction {
    type: CategoriesActionType.FETCH_CATEGORIES_ERROR;
    payload: string;
}

export type CategoriesAction = FetchCategoriesAction | FetchCategoriesErrorAction;