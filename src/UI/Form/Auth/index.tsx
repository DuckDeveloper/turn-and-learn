import React, {Dispatch, FC, memo, SetStateAction, useCallback} from 'react'

import {useFetch} from 'hooks'

import cl from './index.module.scss'

export interface AuthFormParams {
    onSubmit: () => Promise<void>
    setError: Dispatch<SetStateAction<string>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    children?: React.ReactNode
}

const AuthForm: FC<AuthFormParams> = ({onSubmit, setError, setIsLoading, children}) => {
    const useFetchCallback = useCallback(useFetch, [onSubmit, setError, setIsLoading])

    const [getAuth] = useFetchCallback(onSubmit, {setError, setIsLoading})

    const submitHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        getAuth()
    }, [getAuth])

    return <form className={cl.form} onSubmit={submitHandler}>{children}</form>
}

export default memo(AuthForm)
