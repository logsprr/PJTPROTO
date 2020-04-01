export const ListTypesRequest = {
    // users
    LOAD_REQUESTGETPERSON: "@user/Get",
    LOAD_REQUESTGETUSERS: "@user/GetList",
    LOAD_REQUESTUPDATE: "@user/Update",
    LOAD_REQUESTCREATE: "@user/Create",
    LOAD_REQUESTDELETE: "@user/Delete",
    LOAD_SUCCESS: "@user/success",
    LOAD_FAILURE: "@user/failure",

    //login
    LOAD_LOGIN: "@login/user/get",
    LOAD_SUCCESS_LOGIN: "@login/success",
    LOAD_FAILURE_LOGIN: "@login/failure",

    //sendCode
    LOAD_CODE: "@code/user",
    LOAD_CODE_SUCCESS: "@code/user/success",
    LOAD_CODE_FAILURE: "@code/user/failure",

    //resetPass
    LOAD_REQUEST_PASS: "@login/reset/password",
    LOAD_REQUEST_PASS_SUCCESS: "@login/reset/password/success",
    LOAD_REQUEST_PASS_FAILURE: "@login/reset/password/failure",

    //createUser
    LOAD_REQUEST_CREATE_USER: "@create/user",
    LOAD_REQUEST_CREATE_SUCCESS: "@create/user/success",
    LOAD_REQUEST_CREATE_FAILURE: "@create/user/failure",

    //Load Chat
    LOAD_REQUEST_CHAT: "@user/load/chat",
    LOAD_REQUEST_CHAT_SUCCESS: "@user/load/chat/failure",
    LOAD_REQUEST_CHAT_FAILURE: "@user/load/chat/failure",
    LOAD_REQUEST_CHAT_UPDATE: "@user/load/chat/failure",

    //load list chat

    LOAD_REQUEST_LIST_CHAT: "@user/load/listchat",
    LOAD_REQUEST_CHAT_LIST_SUCCESS: "@user/load/listchat/failure",
    LOAD_REQUEST_CHAT_LIST_FAILURE: "@user/load/listchat/failure",
    LOAD_REQUEST_CHAT_LIST_UPDATE: "@user/load/listchat/failure",

}
