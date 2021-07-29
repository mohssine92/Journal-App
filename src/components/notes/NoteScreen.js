import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => { // no es una pantallas asociada a un   router : pero es componente va agrupar varias cosas
  
    return (

        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content"> {/* agrupador de mi formulario  */}

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}
