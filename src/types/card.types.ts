import {Id} from '.'

export type CardId = Id
export type CardText = string
export type CardDate = Date

export interface ICard {
    id: CardId
    cardFirstSide: CardText
    cardSecondSide: CardText
    date: CardDate
}
