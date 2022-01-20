import React, {FC, useCallback, useState} from 'react'
import RegistrationFormComponent from 'components/Auth/Form/RegistrationForm'
import {authService} from 'API'
import {useActions} from 'hooks'
import {userActions} from 'store/user'

import {
    USERNAME_IS_TOO_SHORT,
    USERNAME_IS_TOO_LONG,
    PASSWORD_IS_TOO_SHORT,
    PASSWORD_IS_TOO_LONG,
    PASSWORD_IS_NOT_CONFIRMED,
    EMPTY_USERNAME_OR_PASSWORD,
} from 'constants/errors'

import {
    MIN_USERNAME_LENGTH,
    MAX_USERNAME_LENGTH,
    MIN_PASSWORD_LENGTH,
    MAX_PASSWORD_LENGTH,
} from 'constants/system'


const RegistrationForm: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {fetchUserDataAndLogin} = useActions<typeof userActions>('user')

    const submitIsDisabled = useCallback(
        () => {
            if (username.length < MIN_USERNAME_LENGTH) return USERNAME_IS_TOO_SHORT
            if (username.length > MAX_USERNAME_LENGTH) return USERNAME_IS_TOO_LONG
            if (!username.length || !password.length) return EMPTY_USERNAME_OR_PASSWORD
            if (password.length < MIN_PASSWORD_LENGTH) return PASSWORD_IS_TOO_SHORT
            if (password.length > MAX_PASSWORD_LENGTH) return PASSWORD_IS_TOO_LONG
            if (confirmPassword !== password) return PASSWORD_IS_NOT_CONFIRMED

            return null
        },
        [username, password, confirmPassword],
    )

    const submitHandler = useCallback(async () => {
        const reasonOfDisabled = submitIsDisabled()

        if (reasonOfDisabled) {
            setError(reasonOfDisabled)
            return
        }
        const data = await authService.register({username, password})

        fetchUserDataAndLogin(data)
    }, [authService, username, password, submitIsDisabled])

    const changeUsernameHandler = useCallback((event) => setUsername(event.target.value.trim()), [])
    const changePasswordHandler = useCallback((event) => setPassword(event.target.value.trim()), [])
    const changeConfirmPasswordHandler = useCallback((event) => setConfirmPassword(event.target.value.trim()), [])

    return (
        <RegistrationFormComponent
            onSubmit={ submitHandler }
            isLoading={ isLoading }
            error={ error }
            username={ username }
            password={ password }
            confirmPassword={ confirmPassword }
            changeUsernameHandler={ changeUsernameHandler }
            changePasswordHandler={ changePasswordHandler }
            changeConfirmPasswordHandler={ changeConfirmPasswordHandler }
            setError={ setError }
            setIsLoading={ setIsLoading }
        />
    )
}

export default RegistrationForm
