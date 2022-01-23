import {FolderId, Folder} from 'types/folder.types'

export enum FoldersListReducerActionTypes {
    GET_FOLDERS = 'GET_FOLDERS',
    CREATE_FOLDER = 'CREATE_FOLDER',
    EDIT_FOLDER = 'EDIT_FOLDER',
    DELETE_FOLDER = 'DELETE_FOLDER',
}

export interface GetFoldersAction {
    type: FoldersListReducerActionTypes.GET_FOLDERS
    payload: Folder[]
}

export interface CreateFolderAction {
    type: FoldersListReducerActionTypes.CREATE_FOLDER
    payload: Folder
}

export interface EditFolderAction {
    type: FoldersListReducerActionTypes.EDIT_FOLDER
    payload: Folder
}

export interface DeleteFolderAction {
    type: FoldersListReducerActionTypes.DELETE_FOLDER
    payload: FolderId
}
