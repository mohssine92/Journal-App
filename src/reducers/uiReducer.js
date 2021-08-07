import { types } from '../types/types';




const initialState = {
    loading: false,
    msgError: null
}


/* Nota importante un un reducer returna un estado y el estado esta identificado por una llave en el store . 
 * asi que un reducer pueder returnar diferentes objetos instantaneamente gracias a un tipe unico . 
 * y estos objetos se obtiene atraves de un hook en cada componente necesita consumir este objeto por cualquir motivo : data a listar o data para condicionar 
*/
export const uiReducer = ( state = initialState, action ) => {  // action producto de uan funcion disparada por dispatch de Redux

    switch ( action.type ) { // al crear un reducer funcion primero a pensar ir a crear los tipes
      
        case types.uiSetError:
            return {
                ...state, // con operador spreat siempre mando mismo state
                msgError: action.payload
            }

        case types.uiRemoveError:
                return {
                    ...state,
                    msgError: null
                }


        case types.uiStartLoading: 
            return {
                ...state,
                loading: true
            }
 
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

} // despues de crear reducer lo registramos en el stor para que sale en nuestros state providos por el stor
