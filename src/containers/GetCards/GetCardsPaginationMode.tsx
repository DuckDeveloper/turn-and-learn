import React, {FC, memo} from 'react'
import {useActions} from 'hooks'

import {cardsListActions} from 'store/card'

import GetCards from './GetCards'


const GetCardsPaginationMode: FC = () => {
    const {getCardsPaginationModeAction} = useActions<typeof cardsListActions>('cardsList')

    return <GetCards getCardsAction={ getCardsPaginationModeAction }/>
}

export default memo(GetCardsPaginationMode)