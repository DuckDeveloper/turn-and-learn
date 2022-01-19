import React, {FC} from 'react'

import {getClassName} from 'helpers'

import cl from './index.module.scss'

interface AuthButtonProps {
    className?: string
    isLoading: boolean
    isDisabled: boolean
}

const AuthButton: FC<AuthButtonProps> = ({className, isLoading, isDisabled, children}) => (
    <button type="submit" disabled={isDisabled} className={getClassName([cl.authButton, className || ''])}>
        {isLoading ? 'LOADING' : children}
    </button>
)

AuthButton.defaultProps = {
    className: undefined
}

export default AuthButton
