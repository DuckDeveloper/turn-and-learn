import React, {FC} from 'react'

import {getClassName} from 'helpers'

import cl from './index.module.scss'

interface AuthButtonProps {
    isLoading: boolean
    className?: string
    isDisabled?: boolean
}

const AuthButton: FC<AuthButtonProps> = ({className, isLoading, isDisabled = false, children}) => (
    <button type="submit" disabled={isDisabled} className={getClassName([cl.authButton, className || ''])}>
        {isLoading ? 'LOADING' : children}
    </button>
)

AuthButton.defaultProps = {
    className: undefined,
    isDisabled: undefined,
}

export default AuthButton
