import {FC} from 'react'

export type IsAuthorized = boolean
export type PageNumber = number
export type LimitCardsOfPage = number
export type CardsListDisplayMode = 'pagination' | 'scroll'
export type ModalIsOpen = boolean
export type ComponentInModal = FC<any> | null
export type PageTheme = 'light' | 'dark'
export type AuthToken = string

export interface System {
    isAuthorized: IsAuthorized
    pageNumber: PageNumber
    limitCardsOfPage: LimitCardsOfPage
    cardsListDisplayMode: CardsListDisplayMode
    modalIsOpen: ModalIsOpen
    componentInModal: ComponentInModal
    pageTheme: PageTheme
    authToken: AuthToken
}
