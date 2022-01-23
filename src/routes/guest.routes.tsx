import React from 'react'
import {useRoutes} from 'react-router-dom'

import AuthorizationPage from 'pages/Auth/AuthorizationPage'
import RegistrationPage from 'pages/Auth/RegistrationPage'


const GuestRoutes = () => useRoutes(
    [
        {
            index: true,
            element: <AuthorizationPage/>,
        },
        {
            path: 'reg',
            element: <RegistrationPage/>,
        },
    ],
)

export default GuestRoutes