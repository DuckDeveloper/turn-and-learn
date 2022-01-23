import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom'
import Main from 'pages/Main'


const UserRoutes = () => useRoutes(
    [
        {
            index: true,
            element: <Main/>,
        },
        {
            path: 'reg',
            element: <Navigate to="/"/>,
        },
    ],
)

export default UserRoutes