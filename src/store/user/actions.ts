import {IUser, UserAvatarUrl, UserTheme} from 'types/user.types'

import {UserReducerActionTypes, FetchUserDataAction, ChangeAvatarAction, ChangeThemeAction} from './types'

export const fetchUserData = (data: IUser): FetchUserDataAction => ({
    type: UserReducerActionTypes.FETCH_USER_DATA,
    payload: data,
})

export const changeAvatar = (avatarUrl: UserAvatarUrl): ChangeAvatarAction => ({
    type: UserReducerActionTypes.CHANGE_AVATAR,
    payload: avatarUrl,
})

export const changeTheme = (theme: UserTheme): ChangeThemeAction => ({
    type: UserReducerActionTypes.CHANGE_THEME,
    payload: theme,
})
