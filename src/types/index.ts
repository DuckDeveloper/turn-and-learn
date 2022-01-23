import {User} from './user.types'
import {System} from './system.types'

export type Id = number

export type ResponseUserData = User & Pick<System, 'theme' | 'authToken'>
