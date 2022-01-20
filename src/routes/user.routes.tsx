import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom'


const UserRoutes = () => useRoutes(
    [
        {
            index: true,
            element: <h1>sadsad</h1>,
        },
        {
            path: 'reg',
            element: <Navigate to="/"/>,
        },
    ],
)

export default UserRoutes