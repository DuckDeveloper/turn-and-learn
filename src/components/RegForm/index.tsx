import React, {FC} from 'react'

import AuthInput from 'UI/Input/Auth'
import AuthForm, {AuthFormProps} from 'UI/Form/Auth'
import AuthButton from 'UI/Button/Auth'

import PassInput from 'containers/PassInput'

import cl from './index.module.scss'
import {getClassName} from '../../helpers'

interface RegFormProps extends AuthFormProps {
    submitIsDisabled: boolean
    isLoading: boolean
    error: string
    login: string
    password: string
    confirmPassword: string
    changeLoginHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changeConfirmPasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RegForm: FC<RegFormProps> = ({
    onSubmit,
    setError,
    setIsLoading,
    login,
    changeLoginHandler,
    password,
    changePasswordHandler,
    confirmPassword,
    changeConfirmPasswordHandler,
    error,
    submitIsDisabled,
    isLoading,
}) => (
    <div className={cl.regFormWrapper}>
        <AuthForm onSubmit={onSubmit} setError={setError} setIsLoading={setIsLoading}>
            <p>Hey there,</p>
            <h1>Create an Account</h1>
            <AuthInput
                className={getClassName([cl.loginInputIcon, cl.loginInput])}
                placeholder="Login"
                value={login}
                changeHandler={changeLoginHandler}
                type="text"
            />
            <PassInput placeholder="Password" value={password} changeHandler={changePasswordHandler} />
            <PassInput
                placeholder="Re-enter password"
                value={confirmPassword}
                changeHandler={changeConfirmPasswordHandler}
            />
            {error && <p className={cl.error}>{error}</p>}
            <AuthButton className={getClassName([cl.authButton, {
                [cl.authButtonWithFormError]: Boolean(error),
            }])} isLoading={isLoading} isDisabled={submitIsDisabled}>
                Register
            </AuthButton>
            <p className={cl.centered}>Already have an account? <a className={cl.link} href="/">Login</a></p>
        </AuthForm>
    </div>
)

export default RegForm
