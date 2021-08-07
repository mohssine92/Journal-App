import { types } from '../types/types';


/* en este caso he creado estas acciones independientes en este archivo  porque son todas sincronas  
 *
 * 
*/

export const setError = ( err ) => ({ // cuando suceda err , occupo recibir text de err en el moemento del dispatch de esta accion
    type: types.uiSetError,
    payload: err
});



export const removeError = () => ({ 
    type: types.uiRemoveError // este tipo establece init state
});



export const startLoading = () => ({
    type: types.uiStartLoading
})



export const finishLoading = () => ({
    type: types.uiFinishLoading
})

