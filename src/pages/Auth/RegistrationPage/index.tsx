import RegistrationForm from 'containers/Auth/Form/RegistrationForm'
import React from 'react'

import cl from '../index.module.scss'

const RegistrationPage = () => (
    <div className={cl.authBackground}>
        <div className={cl.authContainer}>
            <div className={cl.registrationDevorativeImg} />
            <div className={cl.authFormWrapper}>
                <RegistrationForm />
            </div>
        </div>
    </div>
)

export default RegistrationPage
