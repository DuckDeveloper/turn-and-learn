import React, {FC, useState} from 'react'

import CardComponent from 'components/CardsList/Card'

import {Card as CardInterface} from 'types/card.types'


interface CardParams {
    card: CardInterface
}

const Card: FC<CardParams> = ({card}) => {
    const [isFlipped, setIsFlipped] = useState(true)

    const clickHandler = () => {
        setIsFlipped(prev => !prev)
    }

    return (
        <CardComponent
            cardText={
                {
                    firstSide: card.firstSide,
                    secondSide: card.secondSide,
                }
            }
            isFlipped={ isFlipped }
            clickHandler={ clickHandler }
        />
    )
}

export default Card