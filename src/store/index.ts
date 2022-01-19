import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userReducer, userActions} from './user'
import {systemReducer, systemActions} from './system'
import {selectedCardsIdListReducer, selectedCardsIdListActions} from './selectedCardsIdList'
import {foldersListReducer, foldersListActions} from './foldersList'
import {cardsListReducer, cardsListActions} from './cardsList'

export const actions = {
    userActions,
    cardsListActions,
    foldersListActions,
    selectedCardsIdListActions,
    systemActions,
}

const rootReducer = combineReducers({
    userState: userReducer,
    cardsListState: cardsListReducer,
    selectedCardsIdListState: selectedCardsIdListReducer,
    foldersListState: foldersListReducer,
    systemState: systemReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
