import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {
  
  
   const { active } = useSelector( state => state.notes ); // Obtener un state del store / null o objetc note

  
   return (
        <div className="journal__main-content  animate__animated animate__fadeIn animate__faster">
            
             <Sidebar /> {/* bara de izquierda  */}

 
              <main> {/* seran contenido princiapal */}
  
                {    
                    ( active )/* Ternario : condicionalmente mostramos un componente o otro usando prop de un onject state (obtenido from state del redux) */ 
                        ? ( <NoteScreen /> )   /* tampoco reciba Arg : porque todo lo trabajamos con redux   */
                        : ( <NothingSelected /> )
                }
  
              </main>


        </div>
        
   ) 



}
