import {systemActions} from 'store/system'
import {LOCAL_STORAGE_TOKEN_KEY} from 'constants/system'

import {useActions} from '.'


const useLogout = () => {
    const {logoutAction} = useActions<typeof systemActions>('system')
    return () => {
        logoutAction()
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    }
}

export default useLogout