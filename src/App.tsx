import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'

import {useActions, useFetch, useTypedSelector} from 'hooks'
import {authService} from 'API'

import {userActions} from 'store/user'

import GuestRoutes from 'routes/guest.routes'
import UserRoutes from 'routes/user.routes'

import Header from 'containers/Header'


const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {isAuthorized, pageTheme, authToken} = useTypedSelector((state) => state.systemState)
    const {loginAndGetUserDataAction} = useActions<typeof userActions>('user')

    const [authorizationByAuthToken] = useFetch(async () => {
        if (!authToken) return

        const data = await authService.authorizationByAuthToken(authToken)

        loginAndGetUserDataAction(data)
    }, {setIsLoading})


    useEffect(() => {
        if (pageTheme) {
            document.body.id = pageTheme
        }
    }, [pageTheme])

    useEffect(() => {
        authorizationByAuthToken()
    }, [])

    if (isLoading) {
        return <h2>LOADING...</h2>
    }

    return (
        <BrowserRouter>
            <Header/>

            { isAuthorized
              ? <UserRoutes/>
              : <GuestRoutes/>
            }
        </BrowserRouter>
    )
}

export default App
