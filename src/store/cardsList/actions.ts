import {CardId, ICard} from 'types/card.types'

import {
    CardsListReducerActionTypes,
    FetchCardsPaginationModeAction,
    FetchCardsScrollModeAction,
    CreateCardAction,
    EditCardAction,
    DeleteCardAction,
} from './types'

export const fetchCardsPaginationMode = (cards: ICard[]): FetchCardsPaginationModeAction => ({
    type: CardsListReducerActionTypes.FETCH_CARDS_PAGINATION_MODE,
    payload: cards,
})

export const fetchCardsScrollMode = (cards: ICard[]): FetchCardsScrollModeAction => ({
    type: CardsListReducerActionTypes.FETCH_CARDS_SCROLL_MODE,
    payload: cards,
})

export const createCard = (card: ICard): CreateCardAction => ({
    type: CardsListReducerActionTypes.CREATE_CARD,
    payload: card,
})

export const editCard = (card: ICard): EditCardAction => ({
    type: CardsListReducerActionTypes.EDIT_CARD,
    payload: card,
})

type DeleteCardParams = {id: CardId; newCard: ICard}
export const deleteCard = ({id, newCard}: DeleteCardParams): DeleteCardAction => ({
    type: CardsListReducerActionTypes.DELETE_CARD,
    payload: {
        id,
        newCard,
    },
})
