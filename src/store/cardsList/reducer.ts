import {ICard} from 'types/card.types'

import {
    CardsListReducerActionTypes,
    FetchCardsPaginationModeAction,
    FetchCardsScrollModeAction,
    CreateCardAction,
    EditCardAction,
    DeleteCardAction,
} from './types'

type CardsListAction =
    | FetchCardsPaginationModeAction
    | FetchCardsScrollModeAction
    | CreateCardAction
    | EditCardAction
    | DeleteCardAction

const initialState: ICard[] = []

export const cardsListReducer = (state: ICard[] = initialState, action: CardsListAction): ICard[] => {
    switch (action.type) {
        case CardsListReducerActionTypes.FETCH_CARDS_PAGINATION_MODE:
            return action.payload
        case CardsListReducerActionTypes.FETCH_CARDS_SCROLL_MODE:
            return [...state, ...action.payload]
        case CardsListReducerActionTypes.CREATE_CARD:
            return [action.payload, ...state]
        case CardsListReducerActionTypes.EDIT_CARD:
            return state.map((card) => (card.id === action.payload.id ? action.payload : card)).slice(0, -1)
        case CardsListReducerActionTypes.DELETE_CARD:
            const filteredState = state.filter((card) => card.id !== action.payload.id)

            return action.payload.newCard ? [...filteredState, action.payload.newCard] : filteredState
        default:
            return state
    }
}
