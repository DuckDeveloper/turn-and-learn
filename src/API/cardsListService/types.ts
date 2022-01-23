import {AuthToken, PageNumber} from 'types/system.types'
import {Card, LimitCardsOfPage} from 'types/card.types'

export interface GetCardsParams {
    authToken: AuthToken
    limitCardsOfPage: LimitCardsOfPage
    pageNumber: PageNumber
}

export interface CardService {
    getCards(params: GetCardsParams): Promise<{cards: Card[]}>

}