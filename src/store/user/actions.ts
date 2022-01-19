import {Dispatch} from 'redux'

import {IResponseUserData} from 'types'
import {IUser, UserAvatarUrl} from 'types/user.types'

import {ChangeThemeAction, LogInAction, PullAuthTokenAction} from 'store/system/types'
import {changeTheme, logIn, pullAuthToken} from 'store/system/actions'

import {ChangeAvatarAction, FetchUserDataAction, UserReducerActionTypes} from './types'

type FetchUserDataAndLogIn =
    FetchUserDataAction
    | LogInAction
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

export const fetchUserDataAndLogIn =
    ({avatarUrl, authToken, theme, login}: IResponseUserData) =>
    (dispatch: Dispatch<FetchUserDataAndLogIn>) => {
        dispatch(fetchUserData({avatarUrl, login}))
        dispatch(changeTheme(theme))
        dispatch(pullAuthToken(authToken))
        dispatch(logIn())
    }


