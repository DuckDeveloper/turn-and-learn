import {ComponentInModal, DisplayMode, ScreenResolution} from 'types/system.types'

import {
    SystemReducerActionTypes,
    LogInAction,
    LogOutAction,
    ChangeScreenResolutionAction,
    ChangeCardsDisplayModeAction,
    OpenModalWindowAction,
    CloseModalWindowAction,
} from './types'

export const logIn = (): LogInAction => ({
    type: SystemReducerActionTypes.LOG_IN,
})

export const logOut = (): LogOutAction => ({
    type: SystemReducerActionTypes.LOG_OUT,
})

export const changeScreenResolution = (screenResolution: ScreenResolution): ChangeScreenResolutionAction => ({
    type: SystemReducerActionTypes.CHANGE_SCREEN_RESOLUTION,
    payload: screenResolution,
})

export const changeCardsDisplayMode = (displayMode: DisplayMode): ChangeCardsDisplayModeAction => ({
    type: SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE,
    payload: displayMode,
})

export const openModalWindow = (componentInModal: ComponentInModal): OpenModalWindowAction => ({
    type: SystemReducerActionTypes.OPEN_MODAL_WINDOW,
    payload: componentInModal,
})

export const closeModalWindow = (): CloseModalWindowAction => ({
    type: SystemReducerActionTypes.CLOSE_MODAL_WINDOW,
})
