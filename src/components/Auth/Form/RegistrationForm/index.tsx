import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'

import {getClassName} from 'helpers'

import AuthInput from 'UI/Input/Auth'
import AuthForm, {AuthFormProps} from 'UI/Form/Auth'
import AuthButton from 'UI/Button/Auth'

import PassInput from 'containers/Auth/PassInput'

import cl from '../index.module.scss'

interface RegistrationFormProps extends AuthFormProps {
    isLoading: boolean
    error: string
    username: string
    password: string
    confirmPassword: string
    changeUsernameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changeConfirmPasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RegistrationForm: FC<RegistrationFormProps> = ({
    onSubmit,
    setError,
    setIsLoading,
    username,
    changeUsernameHandler,
    password,
    changePasswordHandler,
    confirmPassword,
    changeConfirmPasswordHandler,
    error,
    isLoading,
}) => (
    <div className={cl.authFormWrapper}>
        <AuthForm onSubmit={onSubmit} setError={setError} setIsLoading={setIsLoading}>
            <p>Hey there,</p>
            <h1>Create an Account</h1>
            <AuthInput
                className={getClassName([cl.usernameInputIcon, cl.usernameInput])}
                placeholder="Username"
                value={username}
                changeHandler={changeUsernameHandler}
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
            }])} isLoading={isLoading} isDisabled={isLoading}>
                Register
            </AuthButton>
            <p className={cl.centered}>Already have an account? <NavLink className={cl.link} to="/">Login</NavLink></p>
        </AuthForm>
    </div>
)

export default RegistrationForm
