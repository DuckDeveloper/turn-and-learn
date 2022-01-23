import {ResponseUserData} from 'types'
import {AuthToken} from 'types/system.types'


interface AuthenticationParams {
    username: string
    password: string
}

export type AuthorizationByAuthToken = AuthToken

export type AuthorizationParams = AuthenticationParams

export type RegisterParams = AuthenticationParams

export interface AuthService {
    authorizationByAuthToken(params: AuthorizationByAuthToken): Promise<ResponseUserData>

    authorization(params: AuthorizationParams): Promise<ResponseUserData>

    register(params: RegisterParams): Promise<ResponseUserData>
}
