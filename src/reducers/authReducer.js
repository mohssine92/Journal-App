import { types } from '../types/types';  // tipes mejor manejarlos en objto como es el caso , evitar strings : es facil de equivocarse




/* 
    {
        uid: 'jagdfjahdsf127362718', 
        name: 'Fernando'
    }

*/ // es una vision como va estar Objeto del state Cuando me autentico 



export const authReducer = ( state = {}, action ) => { // inicializacion del State es importante : objeto vacio : cuando no estoy autenticado 
                                         // action donde se recibe el return de una accion que fue dispatchada por el hook ed reducer  

     
    switch ( action.type ) {   // controlar las decisiones que van a pasar aqui 

        case types.login:

            return {
                // en esta accion con este tipo debo tener info en payload del id que me regresa firebase y ... etc props segun implemento 
                uid: action.payload.uid,
                name: action.payload.displayName

            }

        case types.logout:

                return { }
    
        default:   
            return state;


    }





} //regresa un state - esto es reducer de autenticacion 


