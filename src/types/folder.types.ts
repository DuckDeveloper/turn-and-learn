import {Id} from '.'

export type FolderId = Id
export type FolderName = string

export interface IFolder {
    id: FolderId
    name: FolderName
}
