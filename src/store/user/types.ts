import {IUser, UserAvatarUrl} from 'types/user.types'

export enum UserReducerActionTypes {
    FETCH_USER_DATA = 'FETCH_USER_DATA',
    CHANGE_AVATAR = 'CHANGE_AVATAR',
}

export interface FetchUserDataAction {
    type: UserReducerActionTypes.FETCH_USER_DATA
    payload: IUser
}

export interface ChangeAvatarAction {
    type: UserReducerActionTypes.CHANGE_AVATAR
    payload: UserAvatarUrl
}

