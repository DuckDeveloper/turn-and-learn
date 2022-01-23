import {AuthToken, ComponentInModal, Theme} from 'types/system.types'

export enum SystemReducerActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    CHANGE_PAGE_NUMBER = 'CHANGE_PAGE_NUMBER',
    CHANGE_CARDS_DISPLAY_MODE = 'CHANGE_CARDS_DISPLAY_MODE',
    CHANGE_THEME = 'CHANGE_THEME',
    PULL_AUTH_TOKEN = 'PULL_AUTH_TOKEN',
    OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW',
    CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW',
}

export interface LoginAction {
    type: SystemReducerActionTypes.LOGIN
}

export interface LogoutAction {
    type: SystemReducerActionTypes.LOGOUT
}

export interface ChangePageNumberAction {
    type: SystemReducerActionTypes.CHANGE_PAGE_NUMBER
    payload: number
}

export interface ChangeCardsListDisplayModeAction {
    type: SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE
}

export interface ChangeThemeAction {
    type: SystemReducerActionTypes.CHANGE_THEME
    payload: Theme
}

export interface PullAuthTokenAction {
    type: SystemReducerActionTypes.PULL_AUTH_TOKEN
    payload: AuthToken
}

export interface OpenModalWindowAction {
    type: SystemReducerActionTypes.OPEN_MODAL_WINDOW
    payload: ComponentInModal
}

export interface CloseModalWindowAction {
    type: SystemReducerActionTypes.CLOSE_MODAL_WINDOW
}
