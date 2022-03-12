import React, {FC, useState} from 'react'

import {getClassName} from 'helpers'

import DropdownItem from './DropdownItem'

import cl from './index.module.scss'


export interface DropdownElement {
    id: string
    text: string | React.ReactNode
    clickHandler: () => void
}

interface DropdownParams {
    dropdownElements: DropdownElement[]
    title?: string
}

const Dropdown: FC<DropdownParams> = ({title = '', dropdownElements}) => {
    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={ cl.dropdown }>
            <button
                onClick={ clickHandler }
                className={ getClassName([cl.toggleHideBtn, {[cl.isOpen]: isOpen}]) }
            >
                { title }
            </button>
            {
                isOpen &&
                <ul className={ cl.itemsList }>
                    { dropdownElements.map(params => <DropdownItem key={ params.id } { ...params } />) }
                </ul>
            }
        </div>
    )
}

Dropdown.defaultProps = {
    title: '',
}

export default Dropdown
