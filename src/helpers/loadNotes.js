import { db } from '../firebase/firebase-config';


// 262
export const loadNotes = async ( uid ) => {

    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    //console.log(notesSnap)
    const notes = [];

    // voy a genera nuevos objetos y almacenarlos en coleccion de notas
    notesSnap.forEach( snapHijo => {
      
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data() // proto type del objeto : ver nota video 262 , spreat de las preops
        })
    });
    
    console.log(notes)
    return notes;
}

/* forma de trabajar con fairebase 
   ref al obect db , ref a coleccion y especificar path donde se encuentra la coleccion que me interesa
   y condenar metodo si es add o get 
   - en este caso obtengo la coleccion del path especificada de tal uid 

*/