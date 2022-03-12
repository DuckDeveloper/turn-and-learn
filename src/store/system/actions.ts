import {LOCAL_STORAGE_TOKEN_KEY} from 'constants/system'

import {AuthToken, ComponentInModal, PageNumber, PageTheme} from 'types/system.types'

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


export const loginAction = (): LoginAction => ({
    type: SystemReducerActionTypes.LOGIN,
})

export const logoutAction = (): LogoutAction => ({
    type: SystemReducerActionTypes.LOGOUT,
})

export const changePageNumberAction = (newPageNumberValue: PageNumber): ChangePageNumberAction => ({
    type: SystemReducerActionTypes.CHANGE_PAGE_NUMBER,
    payload: newPageNumberValue,
})

export const changeCardsListDisplayModeAction = (): ChangeCardsListDisplayModeAction => ({
    type: SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE,
})


export const changeThemeAction = (pageTheme: PageTheme): ChangeThemeAction => ({
    type: SystemReducerActionTypes.CHANGE_THEME,
    payload: pageTheme,
})

export const pullAuthTokenAction = (authToken: AuthToken): PullAuthTokenAction => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, authToken)

    return {
        type: SystemReducerActionTypes.PULL_AUTH_TOKEN,
        payload: authToken,
    }
}

export const openModalWindowAction = (componentInModal: ComponentInModal): OpenModalWindowAction => ({
    type: SystemReducerActionTypes.OPEN_MODAL_WINDOW,
    payload: componentInModal,
})

export const closeModalWindowAction = (): CloseModalWindowAction => ({
    type: SystemReducerActionTypes.CLOSE_MODAL_WINDOW,
})
