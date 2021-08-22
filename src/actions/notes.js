import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config'; // objetc ref a la db:fairestor  de fairebase  back
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

//import { loadNotes } from '../helpers/loadNotes';
//import { fileUpload } from '../helpers/fileUpload';




/* Tareas asyncrona 
 * para grabar en firestor : necesito uid del persona - para poder grabar en un path especifico de firestore 
*/
export const startNewNote = () => {
   
    return async( dispatch, getState ) => { // 2 arg es una funcion para Obtener state
                                            // 1 arg dispatch : me lo prove thunk (mdlr de redux) por lo cual cuando tendre la informacion voy a llamar ese dispatch
        const { uid } = getState().auth;  //console.log(uid)
        
        const newNote = { // crear la nota que quiero grabar 
            title: '',
            body: '',
            date: new Date().getTime() 
        }
        
        
        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote ) //260 

        //console.log(doc)
        dispatch( activeNote( doc.id, newNote ) ); // ya no es nul = tengo nota activa : entra a al componente para edicion

        dispatch( addNewNote( doc.id, newNote ) );


    } // segun la logica implementada user autenticado puede crear las notas que les da la gana 


}

export const activeNote = ( id, note ) => ({ // tareas sincrona

    type: types.notesActive,
    payload: { // => esta es la estructura que quiero que tendra la nota Object
        id,
        ...note // spreat del object recibido 
    }

});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    } 
})


/* tarea asyncrona -   
 * se puede obtener uid del state , ver ex :  startNewNote
*/
 export const startLoadingNotes = ( uid ) => {

    return async( dispatch ) => {
        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }

}




/* coleccion de notas de user autenticado obtenidas por un helpers 
 * de tareas asyncronas - pasarla al state correspondiente 
*/
export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});


// actualizar note 
export const startSaveNote = ( note ) => { 
  
    return async( dispatch, getState ) => { // como es tarea asincrona , voy a trabajar con mdlr thunk y creamos este callback es el que se va a disparar (este callbak se dispara gracias a thunk )

        const { uid } = getState().auth; // del user autenticado 

        if ( !note.url ){ // si intento a grabar algo nul en fairestor me va dar err  
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id; //en fairestor no vamos a grabar id en ese Objeto .

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ) );
        Swal.fire('Saved', note.title, 'success');

        // TODO: se puede implementar un try y catch , si falla y mandar alerta de fallo de la carga etc ..
    }
}

// actualizarobjeto de la coleccion: en state store para barar lateral
export const refreshNote = ( id, note ) => ({ // tarea sincrona , refresh store
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});


export const startUploading = ( file ) => { // archivo que deseo subir
  
    return async( dispatch, getState ) => { // comoe s tarea asycrona occupamos thunk 


       const { active:activeNote } = getState().notes; // tener Object nota actual del store

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
       // console.log(fileUrl);  // url de la image en cloudinary service .
        
        // dispatcho la misma accion para actualizar object en db , solo en este caso tendra url de la nota y no lo va a borarr durante el proceso 
        activeNote.url = fileUrl;
        dispatch( startSaveNote( activeNote ) )
        

        Swal.close();
    }
}


// borra del fairestor
export const startDeleting = ( id ) => { // id de la  nota 
   
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid; // get state of store // user id autenticated 

        await db.doc(`${ uid }/journal/notes/${ id }`).delete(); //<void promesa no regresa nada>

        dispatch( deleteNote(id) );

        Swal.fire('Deleted','success');

    }
}

// delet object note from an array of notes en the store
export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});



// react-journal