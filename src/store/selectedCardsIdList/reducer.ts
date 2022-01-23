import {CardId} from 'types/card.types'

import {
    SelectedCardsListActionTypes,
    SelectCardAction,
    CancelSelectCardAction,
    CancelSelectAllCardsAction,
} from './types'


type SelectedCardsIdListAction = SelectCardAction | CancelSelectCardAction | CancelSelectAllCardsAction

const initialState: CardId[] = []

const {
    SELECT_CARD,
    CANCEL_SELECT_CARD,
    CANCEL_SELECT_ALL_CARDS,
} = SelectedCardsListActionTypes

export const selectedCardsIdListReducer = (
    state: CardId[] = initialState,
    action: SelectedCardsIdListAction,
): CardId[] => {
    switch(action.type) {
        case SELECT_CARD:
            return [...state, action.payload]
        case CANCEL_SELECT_CARD:
            return state.filter((cardId) => cardId !== action.payload)
        case CANCEL_SELECT_ALL_CARDS:
            return []
        default:
            return state
    }
}
