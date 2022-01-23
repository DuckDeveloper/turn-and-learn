import React, {FC, useState} from 'react'
import {CardText} from 'types/card.types'

interface CardParams {
    cardText: {
        firstSide: CardText,
        secondSide: CardText,
    }
}

const Card: FC<CardParams> = ({cardText}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const clickHandler = () => {
        setIsFlipped(prev => !prev)
    }
    console.log(cardText)
    return (
        <button onClick={clickHandler}>
            {
                isFlipped
                ? cardText.firstSide
                : cardText.secondSide
            }
        </button>
    )
}

export default Card