import React from 'react'
import { useDispatch } from 'react-redux'


import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';








export const Sidebar = () => {
   
   

    const dispatch = useDispatch();

    const hanleLogout = () => {
       dispatch( startLogout() ) // asyncrona (cominicar con faitrebase - luego dispatcha otra acc sincrona )
      
    }



    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar"> {/* flex : elementos hijos uno alado del otro */}
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Fernando</span>
                </h3>

                <button className="btn"
                         onClick={ hanleLogout }
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />  {/* este componente para mostar una lista y seleccionarla etc ... => tiene cxomponente mapeador */}  

        </aside>
    )
}
