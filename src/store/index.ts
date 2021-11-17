import {combineReducers, createStore} from 'redux'

import {userReducer} from './user/reducer'
import {cardsListReducer} from './cardsList/reducer'
import {selectedCardsIdListReducer} from './selectedCardsIdList/reducer'
import {foldersListReducer} from './foldersList/reducer'
import {systemReducer} from './system/reducer'

const rootReducer = combineReducers({
    userState: userReducer,
    cardsListState: cardsListReducer,
    selectedCardsIdListState: selectedCardsIdListReducer,
    foldersListState: foldersListReducer,
    systemState: systemReducer,
})

export default createStore(rootReducer)
