import React, {FC} from 'react'

import lightLogo from 'components/Header/images/light/logo.svg'
import darkLogo from 'components/Header/images/dark/logo.svg'

import {PageTheme} from 'types/system.types'

import cl from '../index.module.scss'
import {getClassName} from '../../../helpers'


export interface GuestHeaderParams {
    pageTheme: PageTheme
    changeThemeHandler: () => void
}

const GuestHeader: FC<GuestHeaderParams> = ({changeThemeHandler, pageTheme, children}) => (
    <header className={ getClassName([cl.header, {[cl.shadowWrapper]: !children}]) }>
        <img className={ cl.logo } src={ pageTheme === 'light' ? lightLogo : darkLogo } alt="Turn and Learn"/>
        {
            children
            ?
            <div className={ getClassName([cl.content, cl.shadowWrapper]) }>
                {
                    children
                }
            </div>
            :
            <div className={ cl.changeThemeBtnWrapper }>
                <button onClick={ changeThemeHandler } className={ cl.changeThemeBtn } aria-label="Change theme"/>
            </div>
        }
    </header>
)

export default GuestHeader