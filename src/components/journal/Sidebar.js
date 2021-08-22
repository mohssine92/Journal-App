import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';








export const Sidebar = () => {
   
   
    /* hook usado para dispatchar acciones 
     *
     */
    const dispatch = useDispatch();


    /* obtener state del stor - hook de redux
     * tabien podemos Obtener la imagen del perfil  
     */
    const { name } = useSelector( state => state.auth ); 
    
    
    const hanleLogout = () => {
       dispatch( startLogout() ) // asyncrona (cominicar con faitrebase - luego dispatcha otra acc sincrona )
      
    }

    const handleAddNew = () =>{
      dispatch( startNewNote() );



    }



    return (
        
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar"> {/* flex : elementos hijos uno alado del otro */}
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span>{ name }</span>
                </h3>

                <button className="btn"
                         onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={ handleAddNew } /* objetivo crear nueva entrada en fairestro   */
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />  {/* este componente para mostar una lista y seleccionarla etc ... => tiene cxomponente mapeador */}  

        </aside>
    )
}
