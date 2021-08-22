



export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dzrbdobpn/upload';


    /* 
     crear form data para mandarlo a cloudinary - exactamente como esta en postaman 
     js ofrece todo lo que occupamops para la creacion del form
    */
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try { // eso puede fallar pues voy a usar un try y un catch 
        
        // hacer peticiones con fetch 
        const resp = await fetch( cloudUrl, { // resp todo lo que responda cloudinary
            method: 'POST', // por default es get 
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url; // url lo cual necesito actualizar en fairebase
        } else {
            throw await resp.json(); // este seria un err de cloudinary : alli nos va decir que fue que es lo que nos falto 
        }

    } catch (err) {
        throw err; // es err mas grande puede ser url no existe o otras cosas
    }


    // return url de la imagen
}
/* funcion para subida de archivo a cloudinary service 
  TODO tenemos que obtimizar en caso de actualizacion de la imagen en caso de existir borra y vrea nueva , pararecursos de nuestro servidor 
*/