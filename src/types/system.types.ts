import {FC} from 'react'

export type IsAuthorized = boolean
export type DisplayMode = 'pagination' | 'scroll'
export type ModalIsOpen = boolean
export type ComponentInModal = FC<any> | null
export type Theme = 'light' | 'dark'
export type AuthToken = string

export interface ISystem {
    isAuthorized: IsAuthorized
    displayMode: DisplayMode
    modalIsOpen: ModalIsOpen
    componentInModal: ComponentInModal
    theme: Theme
    authToken: AuthToken
}
