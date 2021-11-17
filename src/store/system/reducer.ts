import {ISystem} from 'types/system.types'

import {
    SystemReducerActionTypes,
    LogInAction,
    LogOutAction,
    ChangeScreenResolutionAction,
    ChangeCardsDisplayModeAction,
    OpenModalWindowAction,
    CloseModalWindowAction,
} from './types'

type systemReducerAction =
    | LogInAction
    | LogOutAction
    | ChangeScreenResolutionAction
    | ChangeCardsDisplayModeAction
    | OpenModalWindowAction
    | CloseModalWindowAction

const initialState: ISystem = {
    isAuthorized: false,
    screenResolution: 0,
    displayMode: 'scroll',
    modalIsOpen: false,
    componentInModal: null,
}

export const systemReducer = (state: ISystem = initialState, action: systemReducerAction): ISystem => {
    switch (action.type) {
        case SystemReducerActionTypes.LOG_IN:
            return {...state, isAuthorized: true}
        case SystemReducerActionTypes.LOG_OUT:
            return {...state, isAuthorized: false}
        case SystemReducerActionTypes.CHANGE_SCREEN_RESOLUTION:
            return {...state, screenResolution: action.payload}
        case SystemReducerActionTypes.CHANGE_CARDS_DISPLAY_MODE:
            return {...state, displayMode: action.payload}
        case SystemReducerActionTypes.OPEN_MODAL_WINDOW:
            return {...state, modalIsOpen: true, componentInModal: action.payload}
        case SystemReducerActionTypes.CLOSE_MODAL_WINDOW:
            return {...state, modalIsOpen: false, componentInModal: null}
        default:
            return state
    }
}
