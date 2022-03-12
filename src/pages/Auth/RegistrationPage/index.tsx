import RegistrationForm from 'containers/Auth/Form/RegistrationForm'
import React, {FC} from 'react'

import cl from '../index.module.scss'

const RegistrationPage: FC = () => (
    <div className={cl.background}>
        <div className={cl.container}>
            <div className={cl.decorativeImgReg} />
            <div className={cl.formWrapper}>
                <RegistrationForm />
            </div>
        </div>
    </div>
)

export default RegistrationPage
