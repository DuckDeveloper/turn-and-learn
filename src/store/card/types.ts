import {CardId, Card} from 'types/card.types'

export enum CardsListReducerActionTypes {
    GET_CARDS_PAGINATION_MODE = 'GET_CARDS_PAGINATION_MODE',
    GET_CARDS_SCROLL_MODE = 'GET_CARDS_SCROLL_MODE',
    CREATE_CARD = 'CREATE_CARD',
    EDIT_CARD = 'EDIT_CARD',
    DELETE_CARD = 'DELETE_CARD',
    CLEAR_CARDS_LIST = 'CLEAR_CARDS_LIST'
}

export interface GetCardsPaginationModeAction {
    type: CardsListReducerActionTypes.GET_CARDS_PAGINATION_MODE
    payload: Card[]
}

export interface GetCardsScrollModeAction {
    type: CardsListReducerActionTypes.GET_CARDS_SCROLL_MODE
    payload: Card[]
}

export interface CreateCardAction {
    type: CardsListReducerActionTypes.CREATE_CARD
    payload: Card
}

export interface EditCardAction {
    type: CardsListReducerActionTypes.EDIT_CARD
    payload: Card
}

export interface DeleteCardAction {
    type: CardsListReducerActionTypes.DELETE_CARD
    payload: {
        id: CardId,
        newCard?: Card,
    }
}

export interface ClearCardsListAction {
    type: CardsListReducerActionTypes.CLEAR_CARDS_LIST
}

export type GetCardsAction = (cards: Card[]) => GetCardsPaginationModeAction | GetCardsScrollModeAction
