import CardContainer from 'containers/Card'
import React, { FC } from 'react'

import {Card as CardInterface} from 'types/card.types'

interface CardsListParams {
    cardsList: CardInterface[]
}
const CardsList: FC<CardsListParams> = ({cardsList}) => (
    <ul>
        {cardsList.map((card) => <CardContainer key={card.id} card={ card } />)}
    </ul>
)

export default CardsList