import React, {FC, useMemo} from 'react'

import {BASE_API_URL} from 'constants/system'

import {AvatarUrl, Username} from 'types/user.types'

import Dropdown, {DropdownElement} from 'UI/Dropdown'
import Search from 'UI/Input/Search'
import GuestHeader, {GuestHeaderParams} from '../GuestHeader'

import cl from '../index.module.scss'


interface UserHeaderParams extends GuestHeaderParams {
    logoutHandler: () => void
    avatarUrl: AvatarUrl
    username: Username
}

const UserHeader: FC<UserHeaderParams> = ({logoutHandler, changeThemeHandler, username, avatarUrl, pageTheme}) => {
    const dropdownElements: DropdownElement[] = useMemo(() => [
        {
            id: 'aDa4sdqw2eq2ra1ds',
            text: <span className={ cl.logoutIcon }>Sign Out</span>,
            clickHandler: logoutHandler,
        },
    ], [])

    return (
        <GuestHeader changeThemeHandler={ changeThemeHandler } pageTheme={ pageTheme }>
            <label className={ cl.search }>
                <Search placeholder="Search"/>
            </label>
            <div className={ cl.menu }>
                <img className={ cl.avatar } src={ `${ BASE_API_URL }/${ avatarUrl }` } alt="Avatar"/>
                <div>
                    <Dropdown title={ username } dropdownElements={ dropdownElements }/>
                </div>
                <div className={ cl.changeThemeBtnWrapper }>
                    <button onClick={ changeThemeHandler } className={ cl.changeThemeBtn } aria-label="Change theme"/>
                </div>
                <div className={ cl.editBtnWrapper }>
                    <button className={ cl.editBtn } aria-label="Edit"/>
                </div>
            </div>
        </GuestHeader>
    )
}

export default UserHeader