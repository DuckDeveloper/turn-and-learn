import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'

import {getClassName} from 'helpers'

import AuthInput from 'UI/Input/Auth'
import AuthForm, {AuthFormParams} from 'UI/Form/Auth'
import AuthButton from 'UI/Button/Auth'

import PassInput from 'containers/Auth/PassInput'

import cl from '../index.module.scss'


interface RegistrationFormParams extends AuthFormParams {
    isLoading: boolean
    error: string
    username: string
    password: string
    confirmPassword: string
    changeUsernameHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changePasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    changeConfirmPasswordHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RegistrationForm: FC<RegistrationFormParams> = ({
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
    <div className={ cl.formWrapper }>
        <AuthForm onSubmit={ onSubmit } setError={ setError } setIsLoading={ setIsLoading }>
            <p>Hey there,</p>
            <h1>Create an Account</h1>
            <AuthInput
                className={ getClassName([cl.icon, cl.usernameInput]) }
                placeholder="Username"
                value={ username }
                changeHandler={ changeUsernameHandler }
                type="text"
            />
            <PassInput
                placeholder="Password"
                value={ password }
                changeHandler={ changePasswordHandler }
            />
            <PassInput
                placeholder="Re-enter password"
                value={ confirmPassword }
                changeHandler={ changeConfirmPasswordHandler }
            />
            { error && <p className={ cl.error }>{ error }</p> }
            <AuthButton
                isLoading={ isLoading }
                isDisabled={ isLoading }
                className={
                    getClassName([
                        cl.button,
                        {
                            [cl.buttonWithError]: Boolean(error),
                        },
                    ])
                }
            >
                Register
            </AuthButton>
            <p className={ cl.centered }>
                Already have an account?&nbsp;
                <NavLink className={ cl.link } to="/">
                    Login
                </NavLink>
            </p>
        </AuthForm>
    </div>
)

export default RegistrationForm
