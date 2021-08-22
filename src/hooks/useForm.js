import { useState } from 'react'; // hokk react


//custom hook
export const useForm = ( initialState = {} ) => { 
  

    
    const [values, setValues] = useState(initialState);

    
    const reset = ( newFormState = initialState ) => {
        setValues( newFormState ); // de esta forma si no mando arg form uelve a su estado inicial , si seteo valor que yo quiero por arg sera el nuevo estado 
    }


    const handleInputChange = ({ target }) => { // producto de esa funcion es el nuevo values
        //console.log(target);
        setValues({ // cambia estado que va retunar este hook  

            ...values,  // integrar las props del objeto values (que es el estado ) en este objeto
            [ target.name ]: target.value // como el evento se aplica desde un form (element html) (y name de elementos es igual a nuestros props : suceda redefinicion : actualizacion del state)
        });

    }


    return [ values, handleInputChange, reset ];


} // con su implemenatcion tengo control del estado del form instantaneamente