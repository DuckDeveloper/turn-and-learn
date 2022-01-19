import {Dispatch, SetStateAction, useState} from 'react'

type Fetching = () => Promise<void>

interface IUseFetchParams {
    setError?: Dispatch<SetStateAction<string>>
    setIsLoading?: Dispatch<SetStateAction<boolean>>
}

type UseFetch = (callback: () => Promise<void> | void, params: IUseFetchParams) => [Fetching, boolean] | [Fetching]

const useFetch: UseFetch = (callback, {setError, setIsLoading: changeIsLoading}) => {
    const hasStrangerSetIsLoading = Boolean(changeIsLoading)
    const [isLoading, setIsLoading] = hasStrangerSetIsLoading
                                      ? [undefined, changeIsLoading]
                                      : useState<boolean>(false)

    const fetching: Fetching = async () => {
        if(!setIsLoading) return

        try {
            setIsLoading(true)
            await callback()
        } catch (e: any) {
            if (e.message && setError) setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return hasStrangerSetIsLoading ? [fetching] : [fetching, Boolean(isLoading)]
}

export default useFetch
