import React from 'react'
import moment from 'moment'; //paquete de hora
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


export const JournalEntry = ({ id, date, title, body, url }) => {
  

    const noteDate = moment(date); // 264 

    const dispatch = useDispatch();

   // console.log( id, date, title, body, url )
    
    const handleEntryClick = () => {
      dispatch( 
          activeNote( id, {
              date, title, body, url
          })
      );
  
    }
 

    return (
        
        <div className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
             onClick={ handleEntryClick } 
        > {/* flex : elementos hojos uno abarca alado del otro  */}
            
          {

            url && // ternario si existe no es undefined muesta el siguiente
            <div 
                className="journal__entry-picture"
                style={{ // en react style tiene que ser objeto donde especificamos todo ... que va tener este elemento 
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
                }} /* image la hemos puesto como background del div - asi podemos jugar con su posicion dentro del div padre etc  */
            ></div>


          } 

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                   { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>


            <div className="journal__entry-date-box">
               <span> { noteDate.format('dddd') } </span>
               <h4> { noteDate.format('Do') } </h4>
            </div>

        </div>


    )

}
