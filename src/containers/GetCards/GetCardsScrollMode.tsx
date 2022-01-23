import React, {FC, memo} from 'react'
import {useActions} from 'hooks'

import {cardsListActions} from 'store/card'

import GetCards from './GetCards'


const GetCardsPaginationMode: FC = () => {
    const {getCardsScrollModeAction} = useActions<typeof cardsListActions>('cardsList')
    console.log(456)
    return <GetCards getCardsAction={ getCardsScrollModeAction }/>
}

export default memo(GetCardsPaginationMode)