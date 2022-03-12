import React, {FC} from 'react'

import {getClassName} from 'helpers'

import cl from './index.module.scss'

interface AuthButtonParams {
    isLoading: boolean
    className?: string
    isDisabled?: boolean
}

const AuthButton: FC<AuthButtonParams> = ({className, isLoading, isDisabled = false, children}) => (
    <button type="submit" disabled={isDisabled} className={getClassName([cl.button, className || ''])}>
        {isLoading ? 'LOADING' : children}
    </button>
)

AuthButton.defaultProps = {
    className: undefined,
    isDisabled: false,
}

export default AuthButton
