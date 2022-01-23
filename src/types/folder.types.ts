import {Id} from '.'

export type FolderId = Id
export type FolderName = string

export interface Folder {
    id: FolderId
    name: FolderName
}
