import {IUser} from 'types/user.types'

import {UserReducerActionTypes, FetchUserDataAction, ChangeAvatarAction} from './types'

type UserAction = FetchUserDataAction | ChangeAvatarAction

const initialState: IUser = {
    username: '',
    avatarUrl: '',
}

export const userReducer = (state = initialState, action: UserAction): IUser => {
    switch (action.type) {
        case UserReducerActionTypes.FETCH_USER_DATA:
            return {...state, ...action.payload}
        case UserReducerActionTypes.CHANGE_AVATAR:
            return {...state, avatarUrl: action.payload}
        default:
            return state
    }
}
