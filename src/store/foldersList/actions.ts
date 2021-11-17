import {FolderId, IFolder} from 'types/folder.types'

import {
    FoldersListReducerActionTypes,
    FetchFoldersAction,
    CreateFolderAction,
    EditFolderAction,
    DeleteFolderAction,
} from './types'

export const fetchFolders = (folders: IFolder[]): FetchFoldersAction => ({
    type: FoldersListReducerActionTypes.FETCH_FOLDERS,
    payload: folders,
})

export const createFolder = (folder: IFolder): CreateFolderAction => ({
    type: FoldersListReducerActionTypes.CREATE_FOLDER,
    payload: folder,
})

export const editFolder = (folder: IFolder): EditFolderAction => ({
    type: FoldersListReducerActionTypes.EDIT_FOLDER,
    payload: folder,
})

export const deleteFolder = (id: FolderId): DeleteFolderAction => ({
    type: FoldersListReducerActionTypes.DELETE_FOLDER,
    payload: id,
})
