import {useCallback} from 'react'

import {systemActions} from 'store/system'
import {useActions, useTypedSelector} from '.'


const useTheme = () => {
    const {changeThemeAction} = useActions<typeof systemActions>('system')
    const {pageTheme} = useTypedSelector((state) => state.systemState)

    return useCallback(changeThemeAction.bind(null, pageTheme === 'dark' ? 'light' : 'dark'), [pageTheme])
}

export default useTheme