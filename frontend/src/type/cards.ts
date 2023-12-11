
export interface ICard {
    name: string;
    price: number;
    description: string;
    maker: string;
    product_availability: string;
    category: string;
    unique_parameters: string;
    unit_of_measurement: string;
    picture: string[];
    _id: string;
    quantity: number
}

export interface CardState {
    cards: ICard[];
    error: string; 
}

export enum CardActionType {
    FETCH_CARDS = 'FETCH_CARDS',
    FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
}

interface FetchCardsAction {
    type: CardActionType.FETCH_CARDS;
    payload: ICard[];
}

interface FetchCardsErrorAction {
    type: CardActionType.FETCH_CARDS_ERROR;
    payload: string;
}

export type CardAction = FetchCardsAction | FetchCardsErrorAction;