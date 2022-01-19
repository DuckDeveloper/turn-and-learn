import {LOCAL_STORAGE_TOKEN_KEY} from 'constants.json'

import {AuthToken, ComponentInModal, DisplayMode, Theme} from 'types/system.types'

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

export const logIn = (): LogInAction => ({
    type: SystemReducerActionTypes.LOG_IN,
})

export const logOut = (): LogOutAction => ({
    type: SystemReducerActionTypes.LOG_OUT,
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
