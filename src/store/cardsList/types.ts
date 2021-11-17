import {CardId, ICard} from 'types/card.types'

export enum CardsListReducerActionTypes {
    FETCH_CARDS_PAGINATION_MODE = 'FETCH_CARDS_PAGINATION_MODE',
    FETCH_CARDS_SCROLL_MODE = 'FETCH_CARDS_SCROLL_MODE',
    CREATE_CARD = 'CREATE_CARD',
    EDIT_CARD = 'EDIT_CARD',
    DELETE_CARD = 'DELETE_CARD',
}

export interface FetchCardsPaginationModeAction {
    type: CardsListReducerActionTypes.FETCH_CARDS_PAGINATION_MODE
    payload: ICard[]
}

export interface FetchCardsScrollModeAction {
    type: CardsListReducerActionTypes.FETCH_CARDS_SCROLL_MODE
    payload: ICard[]
}

export interface CreateCardAction {
    type: CardsListReducerActionTypes.CREATE_CARD
    payload: ICard
}

export interface EditCardAction {
    type: CardsListReducerActionTypes.EDIT_CARD
    payload: ICard
}

export interface DeleteCardAction {
    type: CardsListReducerActionTypes.DELETE_CARD
    payload: {
        id: CardId,
        newCard?: ICard,
    }
}
