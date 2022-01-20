import {LOCAL_STORAGE_TOKEN_KEY} from 'constants/system'

import {AuthToken, ComponentInModal, DisplayMode, Theme} from 'types/system.types'

import {
    SystemReducerActionTypes,
    LoginAction,
    LogoutAction,
    ChangeCardsDisplayModeAction,
    ChangeThemeAction,
    PullAuthTokenAction,
    OpenModalWindowAction,
    CloseModalWindowAction,
} from './types'

export const login = (): LoginAction => ({
    type: SystemReducerActionTypes.LOGIN,
})

export const logout = (): LogoutAction => ({
    type: SystemReducerActionTypes.LOGOUT,
})

export const changeCardsDisplayMode = (displayMode: DisplayMode): ChangeCardsDisplayModeAction => ({
    type: SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE,
    payload: displayMode,
})

export const changeTheme = (theme: Theme): ChangeThemeAction => ({
    type: SystemReducerActionTypes.CHANGE_THEME,
    payload: theme,
})

export const pullAuthToken = (authToken: AuthToken): PullAuthTokenAction => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, authToken)

    return {
        type: SystemReducerActionTypes.PULL_AUTH_TOKEN,
        payload: authToken,
    }
}

export const openModalWindow = (componentInModal: ComponentInModal): OpenModalWindowAction => ({
    type: SystemReducerActionTypes.OPEN_MODAL_WINDOW,
    payload: componentInModal,
})

export const closeModalWindow = (): CloseModalWindowAction => ({
    type: SystemReducerActionTypes.CLOSE_MODAL_WINDOW,
})
