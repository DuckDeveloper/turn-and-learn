import React, {FC} from 'react'

import {useLogout, useTheme, useTypedSelector} from 'hooks'

import GuestHeader from 'components/Header/GuestHeader'
import UserHeader from 'components/Header/UserHeader'


const Header: FC = () => {
    const {isAuthorized, pageTheme} = useTypedSelector((state) => state.systemState)
    const {username, avatarUrl} = useTypedSelector((state) => state.userState)
    const changeThemeHandler = useTheme()
    const logoutHandler = useLogout()

    return (
        isAuthorized
        ? <UserHeader
            changeThemeHandler={ changeThemeHandler }
            logoutHandler={ logoutHandler }
            username={ username }
            avatarUrl={ avatarUrl }
            pageTheme={ pageTheme }
        />
        : <GuestHeader changeThemeHandler={ changeThemeHandler } pageTheme={ pageTheme }/>
    )
}

export default Header