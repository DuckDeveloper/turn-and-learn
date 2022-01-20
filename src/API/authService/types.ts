import {IResponseUserData} from 'types'
import {AuthToken} from 'types/system.types'


interface IAuthentication {
    username: string
    password: string
}

export type AuthorizationByAuthToken = AuthToken

export type Authorization = IAuthentication

export type Register = IAuthentication

export interface IAuthService {
    authorizationByAuthToken(body: AuthorizationByAuthToken): Promise<IResponseUserData>

    authorization(body: Authorization): Promise<IResponseUserData>

    register(body: Register): Promise<IResponseUserData>
}
