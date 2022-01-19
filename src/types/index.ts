import {IUser} from './user.types'
import {ISystem} from './system.types'

export type Id = number

export type IResponseUserData = IUser & Pick<ISystem, 'theme' | 'authToken'>
