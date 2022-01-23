import {User} from 'types/user.types'

import {UserReducerActionTypes, GetUserDataAction, ChangeAvatarAction} from './types'


type UserAction = GetUserDataAction | ChangeAvatarAction

const initialState: User = {
    username: '',
    avatarUrl: '',
}

const {
    GET_USER_DATA,
    CHANGE_AVATAR,
} = UserReducerActionTypes

export const userReducer = (state = initialState, action: UserAction): User => {
    switch(action.type) {
        case GET_USER_DATA:
            return {...state, ...action.payload}
        case CHANGE_AVATAR:
            return {...state, avatarUrl: action.payload}
        default:
            return state
    }
}
