import {Folder} from 'types/folder.types'

import {
    FoldersListReducerActionTypes,
    GetFoldersAction,
    CreateFolderAction,
    EditFolderAction,
    DeleteFolderAction,
} from './types'


type FoldersListAction = GetFoldersAction | CreateFolderAction | EditFolderAction | DeleteFolderAction

const initialState: Folder[] = []

const {
    GET_FOLDERS,
    CREATE_FOLDER,
    EDIT_FOLDER,
    DELETE_FOLDER,
} = FoldersListReducerActionTypes

export const foldersListReducer = (state: Folder[] = initialState, action: FoldersListAction): Folder[] => {
    switch(action.type) {
        case GET_FOLDERS:
            return action.payload
        case CREATE_FOLDER:
            return [...state, action.payload]
        case EDIT_FOLDER:
            return state.map((folder) => (folder.id === action.payload.id ? action.payload : folder))
        case DELETE_FOLDER:
            return state.filter((folder) => folder.id !== action.payload)
        default:
            return state
    }
}
