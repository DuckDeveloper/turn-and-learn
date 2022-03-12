import AuthorizationForm from 'containers/Auth/Form/AuthorizationForm'
import React, {FC} from 'react'

import cl from '../index.module.scss'

const AuthorizationPage: FC = () => (
    <div className={cl.background}>
        <div className={cl.container}>
            <div className={cl.decorativeImgAuth} />
            <div className={cl.formWrapper}>
                <AuthorizationForm />
            </div>
        </div>
    </div>
)

export default AuthorizationPage
