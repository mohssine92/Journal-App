import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';








// accion async (asi el mdlr redux cuando reciba accion que no returna Objeto , returna una accion (callback): es decir accion asyn => lo va a ejecutar : como es el caso este)
export const startLoginEmailPassword = (email, password) => {

    return (dispatch) => { // de esta manera refresa el callback la funcion madre
                           //  dispatch : me lo ofrece thunk (mdlr de redux) (asi dispatcho accion en mi callback)

      
        setTimeout(() =>{
          
            dispatch( login(123, 'claire-loulou') );

        },3500);
      
      
    
      
                           // dispatch( startLoading() );
        
        
       /*  firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => { // asi cuando se resuelva la accion asyncrona - hacemos otro  dispatch de una accion syncrona (y se acabo el asunto)
                dispatch(login( user.uid, user.displayName ));

                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            }) */

        
        
    }


}


// tarea asyncrona : esa es la accion a conectar con el button de Google Sign-in () (en caso de uso de Firebase)
export const startGoogleLogin = () => {
 
    return ( dispatch ) => {   //  dispatch : me lo prove thunk (mdlr de redux) por lo cual cuando tendre la informacion voy a llamar ese dispatch

        firebase.auth().signInWithPopup( googleAuthProvider ) // pide el provedere de autenticacion en este caso de google : fue habilitado en firebase 
            .then( ({ user }) => {
                
                //console.log(user);
                  dispatch( // dispatchar accion asyncrona
                  
                    login( user.uid, user.displayName ) // 241

                ) // deberia amnejar el err : lo hacemos despues



            });

    }



} // este sign-in de google atraves de firebase , si trabajo mi backend en node sera el callback de otra forma 






export const login = (uid, displayName) => ({

    type: types.login, // este es el type que va Evaluar switch del Reducer : para tomar decision
    payload: {
        uid,
        displayName
    }

}); // esta es la forma corta cuando una funcion de flecha returna solo un objeto















/* import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() );
        
        
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));

                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            })

        
        
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user }) => {

                await user.updateProfile({ displayName: name });

                dispatch(
                    login( user.uid, user.displayName )
                );
            })
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}



export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName )
                )
            });

    }
}





export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}


export const logout = () => ({
    type: types.logout
})

 */
