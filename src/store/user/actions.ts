import {Dispatch} from 'redux'

import {IResponseUserData} from 'types'
import {IUser, UserAvatarUrl} from 'types/user.types'

import {ChangeThemeAction, LoginAction, PullAuthTokenAction} from 'store/system/types'
import {changeTheme, login, pullAuthToken} from 'store/system/actions'

import {ChangeAvatarAction, FetchUserDataAction, UserReducerActionTypes} from './types'

type FetchUserDataAndLogin =
    FetchUserDataAction
    | LoginAction
    | ChangeThemeAction
    | PullAuthTokenAction

export const fetchUserData = (data: IUser): FetchUserDataAction => ({
    type: UserReducerActionTypes.FETCH_USER_DATA,
    payload: data
})

export const changeAvatar = (avatarUrl: UserAvatarUrl): ChangeAvatarAction => ({
    type: UserReducerActionTypes.CHANGE_AVATAR,
    payload: avatarUrl,
})

export const fetchUserDataAndLogin =
    ({avatarUrl, authToken, theme, username}: IResponseUserData) =>
    (dispatch: Dispatch<FetchUserDataAndLogin>) => {
        dispatch(fetchUserData({avatarUrl, username}))
        dispatch(changeTheme(theme))
        dispatch(pullAuthToken(authToken))
        dispatch(login())
    }


