import {IResponseUserData} from '../../types'

interface IAuthentication {
    login: string
    password: string
}

export type LogIn = IAuthentication

export type Register = IAuthentication

export interface IAuthService {
    logIn(body: LogIn): Promise<IResponseUserData>
    register(body: Register): Promise<IResponseUserData>
}
