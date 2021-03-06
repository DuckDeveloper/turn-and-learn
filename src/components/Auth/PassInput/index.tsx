import React, {FC} from 'react'

import {getClassName} from 'helpers'
import AuthInput, {AuthInputParams} from 'UI/Input/Auth'

import cl from './index.module.scss'

interface PassInputParams extends AuthInputParams {
    clickHandler: () => void
}

const PassInput: FC<PassInputParams> = ({value, placeholder, type, changeHandler, clickHandler}) => (
    <AuthInput className={cl.icon} placeholder={placeholder} value={value} type={type} changeHandler={changeHandler}>
        <button
            className={getClassName([cl.button, type === 'password' ? cl.hidePass : cl.openPass])}
            type="button"
            aria-label="See password"
            onClick={clickHandler}
        />
    </AuthInput>
)

export default PassInput
