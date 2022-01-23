import {Card} from 'types/card.types'

import {
    CardsListReducerActionTypes,
    GetCardsPaginationModeAction,
    GetCardsScrollModeAction,
    CreateCardAction,
    EditCardAction,
    DeleteCardAction,
    ClearCardsListAction,
} from './types'


type CardsListAction =
    | GetCardsPaginationModeAction
    | GetCardsScrollModeAction
    | CreateCardAction
    | EditCardAction
    | DeleteCardAction
    | ClearCardsListAction

const initialState: Card[] = []

const {
    GET_CARDS_PAGINATION_MODE,
    GET_CARDS_SCROLL_MODE,
    CREATE_CARD,
    EDIT_CARD,
    DELETE_CARD,
    CLEAR_CARDS_LIST,
} = CardsListReducerActionTypes

export const cardsListReducer = (state: Card[] = initialState, action: CardsListAction): Card[] => {
    switch(action.type) {
        case GET_CARDS_PAGINATION_MODE:
            return action.payload
        case GET_CARDS_SCROLL_MODE:
            return [...state, ...action.payload]
        case CREATE_CARD:
            return [action.payload, ...state]
        case EDIT_CARD:
            return state.map((card) => (card.id === action.payload.id ? action.payload : card)).slice(0, -1)
        case DELETE_CARD:
            const filteredState = state.filter((card) => card.id !== action.payload.id)

            return action.payload.newCard ? [...filteredState, action.payload.newCard] : filteredState
        case CLEAR_CARDS_LIST:
            return []
        default:
            return state
    }
}
