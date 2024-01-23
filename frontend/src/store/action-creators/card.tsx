import axios from 'axios';
import { Dispatch} from 'react';
import { CardAction, CardActionType, ICard } from '../../type/cards';

export const fetchCard = () => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/cards');
           
           dispatch({type: CardActionType.FETCH_CARDS, payload: response.data})
        } catch (error) {
            dispatch({
                type: CardActionType.FETCH_CARDS_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const searchCard = (query: string) => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/cards/search?query='+ query);
           console.log(response.data);
           dispatch({type: CardActionType.FETCH_CARDS, payload: response.data})
           return response.data
        } catch (error) {
            dispatch({
                type: CardActionType.FETCH_CARDS_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const getCardById = (id: string | undefined) => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
           const response = await axios.get('https://eurodom.kg/api/cards/'+ id);
           dispatch({type: CardActionType.FETCH_CARDS, payload: response.data})
           return response.data
        } catch (error) {
            dispatch({
                type: CardActionType.FETCH_CARDS_ERROR, 
                payload: 'Произошло ошбка при загруске карточек товаров'
            })
        }
    }
}

export const updateCardById = (id: string | undefined, dto: any) => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            console.log(dto);
            
           const response = await axios.put(`https://eurodom.kg/api/cards/${id}`, dto);
           console.log(response.data);
           
           dispatch({type: CardActionType.FETCH_CARDS, payload: response.data})
           return response.data
        } catch (error) {
            console.error('Error updating card:', error);
            dispatch({
                type: CardActionType.FETCH_CARDS_ERROR, 
                payload: 'Произошла ошибка при обновлении карточки товара'
            });
            throw new Error('Произошла ошибка при обновлении карточки товара');
        }
    }
}
export const deleteCard = (id: string | undefined,) => {    
    return async (dispatch: Dispatch<CardAction>) => {
        try {
           const response = await axios.delete(`https://eurodom.kg/api/cards/${id}`);
           dispatch({type: CardActionType.FETCH_CARDS, payload: response.data})
           return response.data
        } catch (error) {
            console.error('Error updating card:', error);
            dispatch({
                type: CardActionType.FETCH_CARDS_ERROR, 
                payload: 'Произошла ошибка при обновлении карточки товара'
            });
            throw new Error('Произошла ошибка при обновлении карточки товара');
        }
    }
}