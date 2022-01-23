import {CardId} from 'types/card.types'

import {
    SelectedCardsListActionTypes,
    SelectCardAction,
    CancelSelectCardAction,
    CancelSelectAllCardsAction,
} from './types'

export const selectCardAction = (id: CardId): SelectCardAction => ({
    type: SelectedCardsListActionTypes.SELECT_CARD,
    payload: id,
})

export const cancelSelectCardAction = (id: CardId): CancelSelectCardAction => ({
    type: SelectedCardsListActionTypes.CANCEL_SELECT_CARD,
    payload: id,
})

export const cancelSelectAllCardsAction = (): CancelSelectAllCardsAction => ({
    type: SelectedCardsListActionTypes.CANCEL_SELECT_ALL_CARDS,
})
