import React, {FC, memo, useCallback, useState} from 'react'

import {AuthInputProps} from 'UI/Input/Auth'
import PassInputComponent from 'components/PassInput'

type PassInputProps = Pick<AuthInputProps, 'changeHandler' | 'value' | 'placeholder'>

const PassInput: FC<PassInputProps> = ({changeHandler, placeholder, value}) => {
    const [type, setType] = useState<'text' | 'password'>('password')

    const changeInputType = useCallback(() => setType((prev) => (prev === 'text' ? 'password' : 'text')), [setType])

    return <PassInputComponent placeholder={placeholder} value={value} type={type} changeHandler={changeHandler} clickHandler={changeInputType} />
}

export default memo(PassInput)
