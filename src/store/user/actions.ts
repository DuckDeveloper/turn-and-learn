import {Dispatch} from 'redux'

import {ResponseUserData} from 'types'
import {User, AvatarUrl} from 'types/user.types'

import {ChangeThemeAction, LoginAction, PullAuthTokenAction} from 'store/system/types'
import {changeThemeAction, loginAction, pullAuthTokenAction} from 'store/system/actions'

import {ChangeAvatarAction, GetUserDataAction, UserReducerActionTypes} from './types'

type LoginAndGetUserData =
    GetUserDataAction
    | LoginAction
    | ChangeThemeAction
    | PullAuthTokenAction

export const getUserDataAction = (data: User): GetUserDataAction => ({
    type: UserReducerActionTypes.GET_USER_DATA,
    payload: data
})

export const changeAvatarAction = (avatarUrl: AvatarUrl): ChangeAvatarAction => ({
    type: UserReducerActionTypes.CHANGE_AVATAR,
    payload: avatarUrl,
})

export const loginAndGetUserDataAction =
    ({avatarUrl, authToken, pageTheme, username}: ResponseUserData) =>
    (dispatch: Dispatch<LoginAndGetUserData>) => {
        dispatch(getUserDataAction({avatarUrl, username}))
        dispatch(changeThemeAction(pageTheme))
        dispatch(pullAuthTokenAction(authToken))
        dispatch(loginAction())
    }


