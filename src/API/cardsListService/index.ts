import {buildStringByQueryParams, getResponse} from 'helpers'
import {BASE_API_URL} from 'constants/system'

import {CardService} from './types'


const cardsListService: CardService = {
    async getCards({authToken, limitCardsOfPage, pageNumber}) {
        const apiUrl = 'card'
        const queryParams = {
            _limit: limitCardsOfPage,
            _page: pageNumber,
        }
        const queryString = buildStringByQueryParams(queryParams)
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${ authToken }`,
            },
        }

        return getResponse(`${ BASE_API_URL }/${ apiUrl }?${ queryString }`, params)
    }
}

export default cardsListService