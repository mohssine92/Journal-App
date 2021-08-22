/* como quiero que este mis state 
    {
        notes: [], listado las personas va a poder dar clcik en ellos
        active: null, => la prop  active va poder estar nul tendra objeto de la nota activa - nul no hay nota seleccionada 
        active: {
            id: 'KASKLDJALKSDJ129387123', unico de fairebase
            title: '',
            body: '',
            imageUrl: '',
            date: 12387612387126  
        }
    }

*/


import { types } from '../types/types';

const initialState = { // esto es el state inicial de este reducer 
    notes: [],
    active: null
}


/* reducer nada mas una funcion pura returna un state depende de una accion dispatchada  
 * no olvidar jamas anadir el reducer a mi stro de states
 */
export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.notesActive:

            return {
                ...state, // clonacion del estado anterior
                active: {
                    ...action.payload // podemos hacer action.payload : pero el profe prefiere romper la relacion
                }
            }
        
        case  types.notesAddNew:

            return {
                ...state, 
                notes: [ action.payload, ...state.notes ] // agregar nota a la coleccion  
            }

        case types.notesLoad:

            return {
                ...state,
                notes: [ ...action.payload ]
            }
    
        case types.notesUpdated:

            return { // actualizar objeto de coleccion en el store es todo 
                ...state, // siempre regreso el estado anterior 
                notes: state.notes.map( // redefinir notes prop 
                    note => note.id === action.payload.id // voy a mutar la nota que me interesa usando un ternario 
                        ? action.payload.note
                        : note // en caso contrario dejo la nota como estaba 
                )
            }

        case types.notesDelete:

            return {
                ...state, // para no perder el estado anterior 
                active: null, // puesto que es borrado es decir no hay object note activado 
                notes: state.notes.filter( note => note.id !== action.payload )
                // la condicion es tener coleccion nueva evitando el id mandado
            } 

        case types.notesLogoutCleaning:

            return {
                ...state, // spreat de prop actual 
                active: null, // redifinicion
                notes: [] // redifinicion 
            } // objetivo cuando uid se desconecta purgar su informacion del store


        default:
            return state
    }


}