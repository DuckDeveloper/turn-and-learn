import React, {FC} from 'react'

import Card from 'containers/CardsList/Card'

import {Card as CardInterface} from 'types/card.types'

import cl from './index.module.scss'


interface CardsListParams {
    cardsList: CardInterface[]
}

const CardsList: FC<CardsListParams> = ({cardsList}) => (
    <ul className={ cl.cardsList }>
        { cardsList.map((card) => <Card key={ card.id } card={ card }/>) }
    </ul>
)

export default CardsList