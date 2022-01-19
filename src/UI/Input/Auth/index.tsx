import React, {ChangeEvent, FC, memo, useCallback, useMemo, useState} from 'react'

import {getClassName} from 'helpers'
import cl from './index.module.scss'

export interface AuthInputProps {
    className?: string
    placeholder: string
    value: string
    type: 'text' | 'password'
    children?: React.ReactNode
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput: FC<AuthInputProps> = ({changeHandler, placeholder, value, className, type, children}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const focusHandler =  useCallback(() => setIsFocused(true), [setIsFocused])
    const blurHandler = useCallback(() => setIsFocused(false), [setIsFocused])

    const inputContainerClassName = useMemo(
        () => getClassName([cl.inputAuthContainer, className || '']),
        [cl, className, getClassName]
    )
    const inputClassName = useMemo(() => getClassName([cl.inputAuth]), [cl, getClassName])

    return (
        <label className={getClassName([inputContainerClassName, {
            [cl.inputIsFocused]: isFocused,
        }])}>
            <input
                placeholder={placeholder}
                value={value}
                className={inputClassName}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
                type={type}
            />
            {children}
        </label>
    )
}

export default memo(AuthInput)
