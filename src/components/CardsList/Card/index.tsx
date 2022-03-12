import React, {FC} from 'react'
import {getClassName} from 'helpers'

import {CardText} from 'types/card.types'

import cl from '../index.module.scss'


interface CardParams {
    cardText: {
        firstSide: CardText,
        secondSide: CardText,
    }
    isFlipped: boolean
    clickHandler: () => void
}

const Card: FC<CardParams> = ({isFlipped, clickHandler, cardText}) => (
    <li>
        <ul className={ cl.firebox }>
            <li className={ getClassName([cl.cardWrapper, cl.front, {[cl.active]: isFlipped}]) }>
                <button className={ cl.card } onClick={ clickHandler }>
                    { cardText.firstSide.repeat(4) }
                </button>
            </li>
            <li className={ getClassName([cl.cardWrapper, cl.back, {[cl.active]: !isFlipped}]) }>
                <button className={ cl.card } onClick={ clickHandler }>
                    { cardText.secondSide }
                </button>
            </li>
        </ul>
    </li>

)


export default Card