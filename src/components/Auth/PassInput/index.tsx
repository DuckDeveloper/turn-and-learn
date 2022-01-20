import React, {FC} from 'react'

import {getClassName} from 'helpers'
import AuthInput, {AuthInputProps} from 'UI/Input/Auth'

import cl from './index.module.scss'

interface PassInputProps extends AuthInputProps {
    clickHandler: () => void
}

const PassInput: FC<PassInputProps> = ({value, placeholder, type, changeHandler, clickHandler}) => (
    <AuthInput className={cl.passIcon} placeholder={placeholder} value={value} type={type} changeHandler={changeHandler}>
        <button
            className={getClassName([cl.toggleViewPassBtn, type === 'password' ? cl.hidePass : cl.openPass])}
            type="button"
            aria-label="See password"
            onClick={clickHandler}
        />
    </AuthInput>
)

export default PassInput
