import {System} from 'types/system.types'

import {LOCAL_STORAGE_TOKEN_KEY} from 'constants/system'

import {
    SystemReducerActionTypes,
    LoginAction,
    LogoutAction,
    ChangePageNumberAction,
    ChangeCardsListDisplayModeAction,
    ChangeThemeAction,
    PullAuthTokenAction,
    OpenModalWindowAction,
    CloseModalWindowAction,
} from './types'


type systemReducerAction =
    | LoginAction
    | LogoutAction
    | ChangePageNumberAction
    | ChangeCardsListDisplayModeAction
    | ChangeThemeAction
    | PullAuthTokenAction
    | OpenModalWindowAction
    | CloseModalWindowAction

const initialState: System = {
    isAuthorized: false,
    limitCardsOfPage: 6,
    pageNumber: 1,
    cardsListDisplayMode: 'pagination',
    modalIsOpen: false,
    componentInModal: null,
    pageTheme: 'light',
    authToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '',
}

const {
    LOGIN,
    LOGOUT,
    CHANGE_PAGE_NUMBER,
    CHANGE_CARDS_DISPLAY_MODE,
    CHANGE_THEME,
    PULL_AUTH_TOKEN,
    OPEN_MODAL_WINDOW,
    CLOSE_MODAL_WINDOW,
} = SystemReducerActionTypes

export const systemReducer = (state: System = initialState, action: systemReducerAction): System => {
    switch(action.type) {
        case LOGIN:
            return {...state, isAuthorized: true}
        case LOGOUT:
            return {...state, isAuthorized: false}
        case CHANGE_PAGE_NUMBER:
            return {...state, pageNumber: action.payload}
        case CHANGE_CARDS_DISPLAY_MODE:
            return {...state, cardsListDisplayMode: state.cardsListDisplayMode === 'pagination' ? 'scroll' : 'pagination'}
        case CHANGE_THEME:
            if (action.payload === state.pageTheme) return state

            return {...state, pageTheme: action.payload}
        case PULL_AUTH_TOKEN:
            return {...state, authToken: action.payload}
        case OPEN_MODAL_WINDOW:
            return {...state, modalIsOpen: true, componentInModal: action.payload}
        case CLOSE_MODAL_WINDOW:
            return {...state, modalIsOpen: false, componentInModal: null}
        default:
            return state
    }
}
