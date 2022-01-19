import {BASE_API_URL} from 'constants.json'
import {getResponse} from 'helpers'

import {IAuthService, Register} from './types'

const authService: IAuthService = {
    async logIn({login, password}) {
        const apiUrl = 'auth/authorization'
        const params = {
            method: 'POST',
            body: JSON.stringify({login, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        return getResponse(`${BASE_API_URL}/${apiUrl}`, params)
    },
    async register({login, password}: Register) {
        const apiUrl = 'auth/registration'
        const params = {
            method: 'POST',
            body: JSON.stringify({login, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        return getResponse(`${BASE_API_URL}/${apiUrl}`, params)
    },
}

export default authService
