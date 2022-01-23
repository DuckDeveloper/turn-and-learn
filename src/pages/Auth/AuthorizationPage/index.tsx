import AuthorizationForm from 'containers/Auth/Form/AuthorizationForm'
import React, {FC} from 'react'

import cl from '../index.module.scss'

const AuthorizationPage: FC = () => (
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
