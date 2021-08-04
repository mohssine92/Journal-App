import { useState } from 'react'; // hokk react


//custom hook
export const useForm = ( initialState = {} ) => { 
  

    
    const [values, setValues] = useState(initialState);

    
    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        //console.log(target);
        setValues({ // cambia estado que va retunar este hook  

            ...values,  // mantiene estado inicial que es un objeto con props : sabems si en target llegaa prop name con mismo nombre se caen encima modificando valor del misma
            [ target.name ]: target.value

        });

    }


    return [ values, handleInputChange, reset ];


} // con su implemenatcion tengo control del estado del form instantaneamente