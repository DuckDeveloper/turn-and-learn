import {FolderId, Folder} from 'types/folder.types'

import {
    FoldersListReducerActionTypes,
    GetFoldersAction,
    CreateFolderAction,
    EditFolderAction,
    DeleteFolderAction,
} from './types'

export const getFoldersAction = (folders: Folder[]): GetFoldersAction => ({
    type: FoldersListReducerActionTypes.GET_FOLDERS,
    payload: folders,
})

export const createFolderAction = (folder: Folder): CreateFolderAction => ({
    type: FoldersListReducerActionTypes.CREATE_FOLDER,
    payload: folder,
})

export const editFolderAction = (folder: Folder): EditFolderAction => ({
    type: FoldersListReducerActionTypes.EDIT_FOLDER,
    payload: folder,
})

export const deleteFolderAction = (id: FolderId): DeleteFolderAction => ({
    type: FoldersListReducerActionTypes.DELETE_FOLDER,
    payload: id,
})
