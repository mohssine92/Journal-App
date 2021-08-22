import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    // para dispatchar acciones
    const dispatch = useDispatch();

    // obtener any state of store - i am  interested just in note active
    const { active:note } = useSelector( state => state.notes );  //console.log(note)

   
    /* useForm se inicia(su estado) solo una vez : iniciar estado , entonces cuando note se cambia debe disparar un effecto ,  resetear este form es  darle nuevo estado  
     * tener en cuenta aunque la nota se cambia en el store ,  no va a dispara este hook por eso mantiene el estado , para este motivo hemos programado el effect 
    */
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues; // extraer 


    // mantiene ref  a este objeto actual  - variable mutable 
    const activeId = useRef( note.id ); 
   

    useEffect(() => { 
        
      if ( note.id !== activeId.current ) {
          reset( note ); 
          activeId.current = note.id // establecer nuevo valor a la ref 
      }
      /* la idea es cuando note Object(objeto por refe en js ) se cambia se dispara el effecto   
       * tenemos un afuncion que va a cambiar el estado cada vez es decir siempre dep del efect se dispara porque los objetos van por referencia en js 
       * asi usamos useRef para evitar un ciclo que va consumira la memoria
      */

    }, [note, reset]) // estoy pasando la dep sel stor - y la funcion que expone hook de useform para resetear el mismo 


     /* la idea cuando yo escribo necesito la nota activa en el store se empieza a actualizar 
        asi la nota activa esta en el stor , asi de notesAppBar componente vamos a dispara save en db la ctualziacion de la nota  
      */
    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id ) );
        
    }


    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title } 
                    onChange={ handleInputChange } //event  manejar su cambio 
                /> 

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange } //event
                ></textarea>

                {   // ternario muestra siempre si llega url de img sino ignora
                    (note.url)  
                    && (
                        <div className="notes__image">
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                }


            </div>


            <button 
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}

/* este el componnete donde vamos a trabajar manejo de los cambios 
 * lo que va hacer editar la nota seleccionada - cuando click save va tomar la nota activa y grabar en firebase
*/
