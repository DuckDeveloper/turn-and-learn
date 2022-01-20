import React, {FC, useCallback, useState} from 'react'
import AuthorizationFormComponent from 'components/Auth/Form/AuthorizationForm'
import {authService} from 'API'
import {useActions} from 'hooks'
import {userActions} from 'store/user'

import {EMPTY_USERNAME_OR_PASSWORD} from 'constants/errors'

const AuthorizationForm: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {fetchUserDataAndLogin} = useActions<typeof userActions>('user')

    const submitIsDisabled = useCallback(() => {
        if(!username.length || !password.length) return EMPTY_USERNAME_OR_PASSWORD

        return null
    }, [username, password])

    const submitHandler = useCallback(async () => {
        const reasonOfDisabled = submitIsDisabled()

        if (reasonOfDisabled) {
            setError(reasonOfDisabled)
            return
        }

        const data = await authService.authorization({username, password})

        fetchUserDataAndLogin(data)
    }, [username, password, authService])

    const changeUsernameHandler = useCallback((event) => setUsername(event.target.value.trim()), [])
    const changePasswordHandler = useCallback((event) => setPassword(event.target.value.trim()), [])

    return (
        <AuthorizationFormComponent
            onSubmit={submitHandler}
            isLoading={isLoading}
            error={error}
            username={username}
            password={password}
            changeUsernameHandler={changeUsernameHandler}
            changePasswordHandler={changePasswordHandler}
            setError={setError}
            setIsLoading={setIsLoading}
        />
    )
}

export default AuthorizationForm
