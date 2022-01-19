import React, {useEffect} from 'react'

import RegistrationPage from 'pages/Auth/RegistrationPage'
import {useTypedSelector} from 'hooks'

const App = () => {
    const {theme} = useTypedSelector((state) => state.systemState)

    useEffect(() => {
        document.body.id = theme
    }, [theme])

    return <RegistrationPage />
}

export default App
