import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from 'store'

interface TypesOfActions {
    user: 'userActions'
    cardsList: 'cardsListActions'
    foldersList: 'foldersListActions'
    selectedCardsIdList: 'selectedCardsIdListActions'
    system: 'systemActions'
}

const typesOfActions: TypesOfActions = {
    user: 'userActions',
    cardsList: 'cardsListActions',
    foldersList: 'foldersListActions',
    selectedCardsIdList: 'selectedCardsIdListActions',
    system: 'systemActions',
}

const useActions = <A>(typeOfActionsKey: keyof TypesOfActions): A => {
    const dispatch = useDispatch()
    const typeOfAction = typesOfActions[typeOfActionsKey]

    return bindActionCreators<A, any>(actions[typeOfAction], dispatch)
}

export default useActions
