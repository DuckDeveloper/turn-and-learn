import {ComponentInModal, DisplayMode, ScreenResolution} from 'types/system.types'

export enum SystemReducerActionTypes {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
    CHANGE_SCREEN_RESOLUTION = 'CHANGE_SCREEN_RESOLUTION',
    CHANGE_CARDS_DISPLAY_MODE = 'CHANGE_CARDS_DISPLAY_MODE',
    OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW',
    CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW',
}

export interface LogInAction {
    type: SystemReducerActionTypes.LOG_IN
}

export interface LogOutAction {
    type: SystemReducerActionTypes.LOG_OUT
}

export interface ChangeScreenResolutionAction {
    type: SystemReducerActionTypes.CHANGE_SCREEN_RESOLUTION
    payload: ScreenResolution
}

export interface ChangeCardsDisplayModeAction {
    type: SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE
    payload: DisplayMode
}

export interface OpenModalWindowAction {
    type: SystemReducerActionTypes.OPEN_MODAL_WINDOW
    payload: ComponentInModal
}

export interface CloseModalWindowAction {
    type: SystemReducerActionTypes.CLOSE_MODAL_WINDOW
}
