import {CardId} from 'types/card.types'

export enum SelectedCardsListActionTypes {
    SELECT_CARD = 'SELECT_CARD',
    CANCEL_SELECT_CARD = 'CANCEL_SELECT_CARD',
    CANCEL_SELECT_ALL_CARDS = 'CANCEL_SELECT_ALL_CARDS',
}

export interface SelectCardAction {
    type: SelectedCardsListActionTypes.SELECT_CARD
    payload: CardId
}

export interface CancelSelectCardAction {
    type: SelectedCardsListActionTypes.CANCEL_SELECT_CARD
    payload: CardId
}

export interface CancelSelectAllCardsAction {
    type: SelectedCardsListActionTypes.CANCEL_SELECT_ALL_CARDS
}
