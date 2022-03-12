import {User, AvatarUrl} from 'types/user.types'

export enum UserReducerActionTypes {
    GET_USER_DATA = 'GET_USER_DATA',
    CHANGE_AVATAR = 'CHANGE_AVATAR',
}

export interface GetUserDataAction {
    type: UserReducerActionTypes.GET_USER_DATA
    payload: User
}

export interface ChangeAvatarAction {
    type: UserReducerActionTypes.CHANGE_AVATAR
    payload: AvatarUrl
}

