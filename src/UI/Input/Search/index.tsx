import React, {FC} from 'react'

import cl from './index.module.scss'


interface SearchParams {
    placeholder?: string
}


const Search: FC<SearchParams> = ({placeholder = ''}) => (
    <div className={ cl.searchWrapper }>
        <input placeholder={ placeholder } className={ cl.search } type="text"/>
    </div>
)

Search.defaultProps = {
    placeholder: ''
}

export default Search