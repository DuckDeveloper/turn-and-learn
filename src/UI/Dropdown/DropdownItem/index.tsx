import React, {FC} from 'react'

import {DropdownElement} from '..'

import cl from '../index.module.scss'


type DropdownItemParams = DropdownElement

const DropdownItem: FC<DropdownItemParams> = ({text, clickHandler}) => (
    <li className={ cl.item }>
        <button onClick={ clickHandler }>
            { text }
        </button>
    </li>
)

export default DropdownItem