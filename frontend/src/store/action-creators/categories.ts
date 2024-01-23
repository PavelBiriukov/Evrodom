import axios from 'axios';
import { Dispatch} from 'react';
import { CategoriesAction, CategoriesActionType } from '../../type/categories';

export const fetchCategories = () => {    
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/categories');
           console.log(response.data);
           
           dispatch({type: CategoriesActionType.FETCH_CATEGORIES, payload: response.data})
        } catch (error) {
            dispatch({
                type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const searchCategories = (query: string) => {    
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/categories/search?query='+ query);
           console.log(response.data);
           dispatch({type: CategoriesActionType.FETCH_CATEGORIES, payload: response.data})
           return response.data
        } catch (error) {
            dispatch({
                type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const getCategoriesById = (id: string | undefined) => {    
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/categories/'+ id);
           dispatch({type: CategoriesActionType.FETCH_CATEGORIES, payload: response.data})
           return response.data
        } catch (error) {
            dispatch({
                type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const updateCategoriesById = (id: string | undefined, dto: any) => {    
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
           const response = await axios.put(`https://eurodom.kg/api/categories/${id}`, dto);
           console.log(response.data);
           
           dispatch({type: CategoriesActionType.FETCH_CATEGORIES, payload: response.data})
           return response.data
        } catch (error) {
            console.error('Error updating categories:', error);
            dispatch({
                type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
                payload: 'Произошла ошибка при обновлении карточки товара'
            });
            throw new Error('Произошла ошибка при обновлении карточки товара');
        }
    }
}
export const deleteCategories = (id: string | undefined,) => {    
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
           const response = await axios.delete(`https://eurodom.kg/api/categories/${id}`);
           dispatch({type: CategoriesActionType.FETCH_CATEGORIES, payload: response.data})
           return response.data
        } catch (error) {
            console.error('Error updating categories:', error);
            dispatch({
                type: CategoriesActionType.FETCH_CATEGORIES_ERROR, 
                payload: 'Произошла ошибка при обновлении карточки товара'
            });
            throw new Error('Произошла ошибка при обновлении карточки товара');
        }
    }
}