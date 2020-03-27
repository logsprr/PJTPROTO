export enum ListTypesRequest {
    // users
    LOAD_REQUESTGETPERSON = "@user/Get",
    LOAD_REQUESTGETUSERS = "@user/GetList",
    LOAD_REQUESTUPDATE = "@user/Update",
    LOAD_REQUESTCREATE = "@user/Create",
    LOAD_REQUESTDELETE = "@user/Delete",
    LOAD_SUCCESS = "@user/success",
    LOAD_FAILURE = "@user/failure"
}

export interface User {
    id: string,
    login: string,
    avatar_url: string,
}

export interface UserState {
    data: User,
    loading: boolean,
    message: string,
    error: boolean
}
export interface UserListState {
    data: User[],
    loading: boolean,
    message: string,
    error: boolean
}

