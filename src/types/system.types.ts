import {FC} from 'react'

export type IsAuthorized = boolean
export type ScreenResolution = number
export type DisplayMode = 'pagination' | 'scroll'
export type ModalIsOpen = boolean
export type ComponentInModal = FC<any> | null

export interface ISystem {
    isAuthorized: IsAuthorized
    screenResolution: ScreenResolution
    displayMode: DisplayMode
    modalIsOpen: ModalIsOpen
    componentInModal: ComponentInModal
}
