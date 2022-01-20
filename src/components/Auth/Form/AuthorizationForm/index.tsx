import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

import {getClassName} from 'helpers'

import AuthInput from 'UI/Input/Auth'
import AuthForm, {AuthFormProps} from 'UI/Form/Auth'
import AuthButton from 'UI/Button/Auth'

import PassInput from 'containers/Auth/PassInput'

import cl from '../index.module.scss'


interface AuthorizationFormProps extends AuthFormProps {
    isLoading: boolean
    error: string
    username: string
    password: string
    changeUsernameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AuthorizationForm: FC<AuthorizationFormProps> = ({
    onSubmit,
    setError,
    setIsLoading,
    username,
    changeUsernameHandler,
    password,
    changePasswordHandler,
    error,
    isLoading,
}) => (
    <div className={ cl.authFormWrapper }>
        <AuthForm onSubmit={ onSubmit } setError={ setError } setIsLoading={ setIsLoading }>
            <p>Hey there,</p>
            <h1>Welcome Back</h1>
            <AuthInput
                className={ getClassName([cl.usernameInputIcon, cl.usernameInput]) }
                placeholder="Username"
                value={ username }
                changeHandler={ changeUsernameHandler }
                type="text"
            />
            <PassInput placeholder="Password" value={ password } changeHandler={ changePasswordHandler }/>
            { error && <p className={ cl.error }>{ error }</p> }
            <AuthButton
                isLoading={ isLoading } isDisabled={ isLoading }
                className={ getClassName([
                    cl.authButton, {
                        [cl.authButtonWithFormError]: Boolean(error),
                    },
                ]) }
            >
                <span className={ cl.usernameButtonDecoration }/>Login
            </AuthButton>
            <p className={ cl.centered }>Don&#39;t have an account yet? <NavLink
                className={ cl.link } to="/reg"
            >Register</NavLink></p>
        </AuthForm>
    </div>
)

export default AuthorizationForm