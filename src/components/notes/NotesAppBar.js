import React from 'react'

import { useDispatch  , useSelector  } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';



export const NotesAppBar = () => {

    // recuperar la nota activa del stor de redux
    const { active } = useSelector( state => state.notes );

    const dispatch = useDispatch(); // para dispatchar accion 

    const handleSave = () => {
       dispatch( startSaveNote( active ) ); // agrabar en fairestore 
    }
    const handlePictureClick = () => {
      
       document.querySelector('#fileSelector').click();
       // ref al input file + event clcik 
       // asi el input referido tendra target de archivo 
    }

    const handleFileChange = (e) => {  // igual que los inputs no tiene nada especial 
      // console.log(e.target)
      // console.log(e.target.files);  

      const file = e.target.files[0];

      if ( file ) { // caso de abrir input y cancelar , no disparamos la subida a cloudinary 

        dispatch( startUploading( file ) );

      }


    }


    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
           
            <input 
                 id="fileSelector" /* input existe pero no se ve como voy hacer click en el ? - ponerle un id etc ... */
                 type="file"
                 name="file"
                 style= {{ display: 'none' }} /* esta alli pero no quiero user que lo vea ,  */
                 onChange={ handleFileChange }  // necesito de algun manera seleccionar un archivo , saber archivo seleccionado , si se cambia , cual de antes , cual de ahora etc ...
            />  {/* NB : al seleccionar la misma img no se dispara cambio en el input   */}
 
            <div>
                
                 <button 
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>


                <button className="btn"
                         onClick={ handleSave } 
                >
                    Save
                </button>
            </div>

        </div>
    )
}
