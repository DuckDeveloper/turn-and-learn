import {MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH} from './system'


export const EMPTY_USERNAME_OR_PASSWORD = 'Please, fill in your username and password'
export const PASSWORD_IS_NOT_CONFIRMED = `Please, confirm your password`
export const USERNAME_IS_TOO_SHORT = `The length of the username must be at least ${ MIN_USERNAME_LENGTH } characters`
export const USERNAME_IS_TOO_LONG = `The length of the username must be no more than ${ MAX_USERNAME_LENGTH } characters`
export const PASSWORD_IS_TOO_SHORT = `The length of the password must be at least ${ MIN_PASSWORD_LENGTH } characters`
export const PASSWORD_IS_TOO_LONG = `The length of the password must be no more than ${ MAX_PASSWORD_LENGTH } characters`
