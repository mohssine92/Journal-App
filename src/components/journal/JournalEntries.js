import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {


    /* hook de redux : Obtener state . 
     * en este caso necesito coleccion de objetos de notas del user autenticado
     */
    const { notes } = useSelector( state => state.notes );
   

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => (

                    <JournalEntry
                         key={ note.id } /* id lo tenemos atraves de fairebase en este caso  */
                         { ...note }  /* extraer la props  */
                    />   /* componente  mapeador -- pasamos properties y asignamos id especifico a cada componente */

                ))/* aqui no me salvo de mandar las properties porque cada componnete de JournalEntry necesita la informacion de un objeto para la mostracion de informacion   */
            }

        </div>
    )
}
/* la ventajas de trabajar con redux , como es el caso este , estoy en un componente de tercer nivel y necesito una coleccion de objectos de notas del user autenticado 
   no tengo porque recibir por propertis y tanto dolor de cabeza , tengo un fuente unica de verdad es el store la saco del stor y la obtengo localmente en este componente y implemento mi 
   logica localmenet es todo  
 *
*/
