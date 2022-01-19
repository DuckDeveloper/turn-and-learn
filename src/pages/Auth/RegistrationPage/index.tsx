import RegForm from 'containers/RegForm'
import React from 'react'

import cl from '../index.module.scss'

const RegistrationPage = () => (
    <div className={cl.regBackground}>
        <div className={cl.regContainer}>
            <div className={cl.regDecorativeImg} />
            <div className={cl.regFormWrapper}>
                <RegForm />
            </div>
        </div>
    </div>
)

export default RegistrationPage
