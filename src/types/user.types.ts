export type UserLogin = string
export type UserAvatarUrl = string
export type UserTheme = 'light' | 'dark'
export type UserToken = string

export interface IUser {
    login: UserLogin
    avatarUrl: UserAvatarUrl
    theme: UserTheme
    token: UserToken
}
