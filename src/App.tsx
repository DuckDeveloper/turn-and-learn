import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'

import {useActions, useFetch, useTypedSelector} from 'hooks'
import {authService} from 'API'

import GuestRoutes from 'routes/guest.routes'
import UserRoutes from 'routes/user.routes'

import {userActions} from 'store/user'


const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {isAuthorized, theme, authToken} = useTypedSelector((state) => state.systemState)
    const {loginAndGetUserDataAction} = useActions<typeof userActions>('user')

    const [authorizationByAuthToken] = useFetch(async () => {
        if (!authToken) return

        const data = await authService.authorizationByAuthToken(authToken)

        loginAndGetUserDataAction(data)
    }, {setIsLoading})


    useEffect(() => {
        document.body.id = theme
    }, [theme])

    useEffect(() => {
        authorizationByAuthToken()
    }, [])

    if (isLoading) {
        return <h2>LOADING...</h2>
    }

    return (
        <BrowserRouter>
            { isAuthorized
              ? <UserRoutes/>
              : <GuestRoutes/>
            }
        </BrowserRouter>
    )
}

export default App
