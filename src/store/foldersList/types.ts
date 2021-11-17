import {FolderId, IFolder} from 'types/folder.types'

export enum FoldersListReducerActionTypes {
    FETCH_FOLDERS = 'FETCH_FOLDERS',
    CREATE_FOLDER = 'CREATE_FOLDER',
    EDIT_FOLDER = 'EDIT_FOLDER',
    DELETE_FOLDER = 'DELETE_FOLDER',
}

export interface FetchFoldersAction {
    type: FoldersListReducerActionTypes.FETCH_FOLDERS
    payload: IFolder[]
}

export interface CreateFolderAction {
    type: FoldersListReducerActionTypes.CREATE_FOLDER
    payload: IFolder
}

export interface EditFolderAction {
    type: FoldersListReducerActionTypes.EDIT_FOLDER
    payload: IFolder
}

export interface DeleteFolderAction {
    type: FoldersListReducerActionTypes.DELETE_FOLDER
    payload: FolderId
}
