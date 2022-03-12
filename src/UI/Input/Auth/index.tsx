import React, {ChangeEvent, FC, memo, useCallback, useMemo, useState} from 'react'

import {getClassName} from 'helpers'
import cl from './index.module.scss'


export interface AuthInputParams {
    className?: string
    placeholder: string
    value: string
    type: 'text' | 'password'
    children?: React.ReactNode
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput: FC<AuthInputParams> = ({changeHandler, placeholder, value, className, type, children}) => {
    const [isFocused, setIsFocused] = useState(false)
    const focusHandler = useCallback(() => setIsFocused(true), [setIsFocused])
    const blurHandler = useCallback(() => setIsFocused(false), [setIsFocused])

    const containerClassName = useMemo(
        () => getClassName([cl.container, className || '']),
        [cl, className, getClassName],
    )

    return (
        <label
            className={ getClassName([
                containerClassName, {
                    [cl.focused]: isFocused,
                },
            ]) }
        >
            <input
                placeholder={ placeholder }
                value={ value }
                onChange={ changeHandler }
                onFocus={ focusHandler }
                onBlur={ blurHandler }
                type={ type }
            />
            { children }
        </label>
    )
}

export default memo(AuthInput)
