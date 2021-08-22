

export const types = {

    // used en  authReducer
    login: '[Auth] Login',
    logout: '[Auth] Logout',


    // usadas en reducer : uiReducer
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    // usadas en reducer : uiReducer
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    // controlar acciones en el rudecer notesReducer
    notesAddNew: '[Notes] New note', // [Notes] : simpelemte para saber que reducer responsable de esta accion
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Updated note',
    notesFileUrl: '[Notes] Updated image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',



} 