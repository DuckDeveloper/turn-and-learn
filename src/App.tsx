import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'

import GuestRoutes from 'routes/guest.routes'

import {useActions, useFetch, useTypedSelector} from 'hooks'
import UserRoutes from './routes/user.routes'
import {userActions} from './store/user'
import {authService} from './API'


const App = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {isAuthorized, theme, authToken} = useTypedSelector((state) => state.systemState)
    const {fetchUserDataAndLogin} = useActions<typeof userActions>('user')

    const getAuthorizeByAuthToken = async () => {
        if (!authToken) return

        const data = await authService.authorizationByAuthToken(authToken)

        fetchUserDataAndLogin(data)
    }

    const [fetchAuthorizeByAuthToken] = useFetch(getAuthorizeByAuthToken, {setIsLoading})

    useEffect(() => {
        document.body.id = theme
    }, [theme])

    useEffect(() => {
        fetchAuthorizeByAuthToken()
    }, [])

    if (isLoading) {
        return <h2>LODAING</h2>
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
