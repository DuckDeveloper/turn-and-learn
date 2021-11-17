import {CardId} from 'types/card.types'

import {
    SelectedCardsListActionTypes,
    SelectCardAction,
    CancelSelectCardAction,
    CancelSelectAllCardsAction,
} from './types'

type SelectedCardsIdListAction = SelectCardAction | CancelSelectCardAction | CancelSelectAllCardsAction

const initialState: CardId[] = []

export const selectedCardsIdListReducer = (
    state: CardId[] = initialState,
    action: SelectedCardsIdListAction
): CardId[] => {
    switch (action.type) {
        case SelectedCardsListActionTypes.SELECT_CARD:
            return [...state, action.payload]
        case SelectedCardsListActionTypes.CANCEL_SELECT_CARD:
            return state.filter((cardId) => cardId !== action.payload)
        case SelectedCardsListActionTypes.CANCEL_SELECT_ALL_CARDS:
            return []
        default:
            return state
    }
}
