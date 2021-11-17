import {IFolder} from 'types/folder.types'

import {
    FoldersListReducerActionTypes,
    FetchFoldersAction,
    CreateFolderAction,
    EditFolderAction,
    DeleteFolderAction,
} from './types'

type FoldersListAction = FetchFoldersAction | CreateFolderAction | EditFolderAction | DeleteFolderAction

const initialState: IFolder[] = []

export const foldersListReducer = (state: IFolder[] = initialState, action: FoldersListAction): IFolder[] => {
    switch (action.type) {
        case FoldersListReducerActionTypes.FETCH_FOLDERS:
            return action.payload
        case FoldersListReducerActionTypes.CREATE_FOLDER:
            return [...state, action.payload]
        case FoldersListReducerActionTypes.EDIT_FOLDER:
            return state.map((folder) => (folder.id === action.payload.id ? action.payload : folder))
        case FoldersListReducerActionTypes.DELETE_FOLDER:
            return state.filter((folder) => folder.id !== action.payload)
        default:
            return state
    }
}
