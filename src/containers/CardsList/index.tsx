import React from 'react'

import {useTypedSelector} from 'hooks'

import CardsListComponent from 'components/CardsList'


const CardsList = () => {
    const cardsList = useTypedSelector((state) => state.cardsListState)

    return (
        <CardsListComponent cardsList={cardsList} />
    )
}

export default CardsList