import {BASE_API_URL} from 'constants/system'
import {getResponse} from 'helpers'

import {IAuthService, Authorization, Register} from './types'


const authService: IAuthService = {
    async authorizationByAuthToken(authToken) {
        const apiUrl = 'auth/verification'
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${ authToken }`,
            },
        }

        return getResponse(`${ BASE_API_URL }/${ apiUrl }`, params)
    },
    async authorization({username, password}: Authorization) {
        const apiUrl = 'auth/authorization'
        const params = {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        return getResponse(`${ BASE_API_URL }/${ apiUrl }`, params)
    },
    async register({username, password}: Register) {
        const apiUrl = 'auth/registration'
        const params = {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        return getResponse(`${ BASE_API_URL }/${ apiUrl }`, params)
    },
}

export default authService
