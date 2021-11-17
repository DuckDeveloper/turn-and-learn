import {CardId} from 'types/card.types'

import {
    SelectedCardsListActionTypes,
    SelectCardAction,
    CancelSelectCardAction,
    CancelSelectAllCardsAction,
} from './types'

export const selectCard = (id: CardId): SelectCardAction => ({
    type: SelectedCardsListActionTypes.SELECT_CARD,
    payload: id,
})

export const cancelSelectCard = (id: CardId): CancelSelectCardAction => ({
    type: SelectedCardsListActionTypes.CANCEL_SELECT_CARD,
    payload: id,
})

export const cancelSelectAllCards = (): CancelSelectAllCardsAction => ({
    type: SelectedCardsListActionTypes.CANCEL_SELECT_ALL_CARDS,
})
