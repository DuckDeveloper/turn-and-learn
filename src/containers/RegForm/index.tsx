import React, {FC, useCallback, useMemo, useState} from 'react'
import RegFormComponent from 'components/RegForm'
import {authService} from 'API'
import {useActions} from 'hooks'
import {userActions} from 'store/user'

const RegForm: FC = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {fetchUserDataAndLogIn} = useActions<typeof userActions>('user')

    const submitIsDisabled = useMemo(
        () => login.length < 3 || login.length > 11 || password.length < 8 || confirmPassword !== password,
        [login, password, confirmPassword]
    )

    const submitHandler = useCallback(async () => {
        if (submitIsDisabled) return
        const data = await authService.register({login, password})

        fetchUserDataAndLogIn(data)
    }, [authService, submitIsDisabled])

    const changeLoginHandler = useCallback((event) => setLogin(event.target.value), [])
    const changePasswordHandler = useCallback((event) => setPassword(event.target.value), [])
    const changeConfirmPasswordHandler = useCallback((event) => setConfirmPassword(event.target.value), [])

    return (
        <RegFormComponent
            onSubmit={submitHandler}
            submitIsDisabled={submitIsDisabled}
            isLoading={isLoading}
            error={error}
            login={login}
            password={password}
            confirmPassword={confirmPassword}
            changeLoginHandler={changeLoginHandler}
            changePasswordHandler={changePasswordHandler}
            changeConfirmPasswordHandler={changeConfirmPasswordHandler}
            setError={setError}
            setIsLoading={setIsLoading}
        />
    )
}

export default RegForm
