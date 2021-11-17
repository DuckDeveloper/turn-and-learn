import {IUser} from 'types/user.types'

import {UserReducerActionTypes, FetchUserDataAction, ChangeAvatarAction, ChangeThemeAction} from './types'

type UserAction = FetchUserDataAction | ChangeAvatarAction | ChangeThemeAction

const initialState: IUser = {
    login: '',
    token: '',
    theme: 'light',
    avatarUrl: '',
}

export const userReducer = (state = initialState, action: UserAction): IUser => {
    switch (action.type) {
        case UserReducerActionTypes.FETCH_USER_DATA:
            return action.payload
        case UserReducerActionTypes.CHANGE_AVATAR:
            return {...state, avatarUrl: action.payload}
        case UserReducerActionTypes.CHANGE_THEME:
            return {...state, theme: action.payload}
        default:
            return state
    }
}
