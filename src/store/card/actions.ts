import {CardId, Card} from 'types/card.types'

import {
    CardsListReducerActionTypes,
    GetCardsAction,
    CreateCardAction,
    EditCardAction,
    DeleteCardAction,
    ClearCardsListAction,
} from './types'


export const getCardsPaginationModeAction: GetCardsAction = (cards) => ({
    type: CardsListReducerActionTypes.GET_CARDS_PAGINATION_MODE,
    payload: cards,
})

export const getCardsScrollModeAction: GetCardsAction = (cards) => ({
    type: CardsListReducerActionTypes.GET_CARDS_SCROLL_MODE,
    payload: cards,
})

export const createCardAction = (card: Card): CreateCardAction => ({
    type: CardsListReducerActionTypes.CREATE_CARD,
    payload: card,
})

export const editCardAction = (card: Card): EditCardAction => ({
    type: CardsListReducerActionTypes.EDIT_CARD,
    payload: card,
})

type DeleteCardParams = {id: CardId, newCard: Card}
export const deleteCardAction = ({id, newCard}: DeleteCardParams): DeleteCardAction => ({
    type: CardsListReducerActionTypes.DELETE_CARD,
    payload: {
        id,
        newCard,
    },
})

export const clearCardsListAction = (): ClearCardsListAction => ({
    type: CardsListReducerActionTypes.CLEAR_CARDS_LIST,
})
