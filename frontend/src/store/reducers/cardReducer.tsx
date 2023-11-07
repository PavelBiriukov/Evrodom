import { CardAction, CardActionType, CardState } from "../../type/cards"

const initialState: CardState = {
    cards: [],
    error: ''
}
export const cardReducer = (state = initialState, action: CardAction): CardState => {
    switch (action.type) {
        case CardActionType.FETCH_CARDS_ERROR:
            return {...state, error: action.payload}
        case CardActionType.FETCH_CARDS:
            return {error: '', cards: action.payload }
        default:
            return state;
    }
}