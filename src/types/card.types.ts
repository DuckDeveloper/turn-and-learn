import {Id} from '.'

export type CardId = Id
export type CardText = string
export type CardDate = Date
export type LimitCardsOfPage = number

export interface Card {
    id: CardId
    firstSide: CardText
    secondSide: CardText
    date: CardDate
}
