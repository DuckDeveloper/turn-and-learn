import React, {FC, memo} from 'react'
import {useActions, useTypedSelector} from 'hooks'

import {systemActions} from 'store/system'
import {cardsListActions} from 'store/card'

import GetCardsPaginationMode from 'containers/GetCards/GetCardsPaginationMode'
import GetCardsScrollMode from 'containers/GetCards/GetCardsScrollMode'
import CardsList from 'containers/CardsList'

import cl from './index.module.scss'


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
            <div className={cl.container}>
                <div className={cl.header}>
                    <h1>My Cards</h1>
                    <div>Date Filter</div>
                </div>
                <CardsList/>
                <div className={cl.footer}>
                    <button onClick={ clickHandler }>Change display Mode</button>
                    <div>Pagination</div>
                </div>
            </div>
        </>
    )
}

export default memo(Main)