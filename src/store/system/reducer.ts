import {ISystem} from 'types/system.types'

import {
    SystemReducerActionTypes,
    LogInAction,
    LogOutAction,
    ChangeCardsDisplayModeAction,
    ChangeThemeAction,
    PullAuthTokenAction,
    OpenModalWindowAction,
    CloseModalWindowAction,
} from './types'

type systemReducerAction =
    | LogInAction
    | LogOutAction
    | ChangeCardsDisplayModeAction
    | ChangeThemeAction
    | PullAuthTokenAction
    | OpenModalWindowAction
    | CloseModalWindowAction

const initialState: ISystem = {
    isAuthorized: false,
    displayMode: 'scroll',
    modalIsOpen: false,
    componentInModal: null,
    theme: 'light',
    authToken: ''
}

export const systemReducer = (state: ISystem = initialState, action: systemReducerAction): ISystem => {
    switch (action.type) {
        case SystemReducerActionTypes.LOG_IN:
            return {...state, isAuthorized: true}
        case SystemReducerActionTypes.LOG_OUT:
            return {...state, isAuthorized: false}
        case SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE:
            return {...state, displayMode: action.payload}
        case SystemReducerActionTypes.CHANGE_THEME:
            if(action.payload === state.theme) return state

            return {...state, theme: action.payload}
        case SystemReducerActionTypes.PULL_AUTH_TOKEN:
            return {...state, authToken: action.payload}
        case SystemReducerActionTypes.OPEN_MODAL_WINDOW:
            return {...state, modalIsOpen: true, componentInModal: action.payload}
        case SystemReducerActionTypes.CLOSE_MODAL_WINDOW:
            return {...state, modalIsOpen: false, componentInModal: null}
        default:
            return state
    }
}
