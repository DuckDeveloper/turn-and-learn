import React, {FC, memo, useEffect} from 'react'
import {useFetch, useTypedSelector} from 'hooks'
import {cardsListService} from 'API'
import {GetCardsAction} from 'store/card/types'


interface GetCardsParams {
    getCardsAction: GetCardsAction
}


const GetCards: FC<GetCardsParams> = ({getCardsAction}) => {
    const {authToken, pageNumber, limitCardsOfPage, cardsListDisplayMode} = useTypedSelector((state) => state.systemState)

    const [getCards] = useFetch(async () => {
        if (!authToken) return

        const data = await cardsListService.getCards({authToken, pageNumber, limitCardsOfPage})
        console.log(data)
        getCardsAction(data.cards)
    }, {})

    useEffect(() => {
        getCards()
    }, [cardsListDisplayMode])


    return (
        <>
        </>
    )
}

export default memo(GetCards)