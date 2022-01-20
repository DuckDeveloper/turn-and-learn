import AuthorizationForm from 'containers/Auth/Form/AuthorizationForm'
import React from 'react'

import cl from '../index.module.scss'

const AuthorizationPage = () => (
    <div className={cl.authBackground}>
        <div className={cl.authContainer}>
            <div className={cl.authorizationDecorativeImg} />
            <div className={cl.authFormWrapper}>
                <AuthorizationForm />
            </div>
        </div>
    </div>
)

export default AuthorizationPage
