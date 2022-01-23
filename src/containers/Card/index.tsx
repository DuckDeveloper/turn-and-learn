import React, {FC} from 'react'

import CardComponent from 'components/Card'

import {Card as CardInterface} from 'types/card.types'

interface CardParams {
    card: CardInterface
}

const Card: FC<CardParams> = ({card}) => {
    console.log(card.id, card)
    return <CardComponent cardText={
        {
            firstSide: card.firstSide,
            secondSide: card.secondSide,
        }
    } />
}

export default Card