import React, {FC, memo} from 'react'
import {useActions, useTypedSelector} from 'hooks'

import {systemActions} from 'store/system'
import {cardsListActions} from 'store/card'

import GetCardsPaginationMode from 'containers/GetCards/GetCardsPaginationMode'
import GetCardsScrollMode from 'containers/GetCards/GetCardsScrollMode'
import CardsList from 'containers/CardsList'


const Main: FC = () => {
    const {cardsListDisplayMode} = useTypedSelector((state) => state.systemState)
    const {changeCardsListDisplayModeAction} = useActions<typeof systemActions>('system')
    const {clearCardsListAction} = useActions<typeof cardsListActions>('cardsList')

    const clickHandler = () => {
        clearCardsListAction()

        changeCardsListDisplayModeAction()
    }

    return (
        <>
            {
                cardsListDisplayMode === 'pagination'
                ? <GetCardsPaginationMode/>
                : <GetCardsScrollMode/>
            }
            <div>
                <CardsList/>
            </div>
            <div>
                <button onClick={ clickHandler }>Change display Mode</button>
            </div>
        </>
    )
}

export default memo(Main)