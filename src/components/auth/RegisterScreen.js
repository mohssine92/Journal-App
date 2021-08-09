import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';



import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  


    /* obtener informacion del state : es otro hook de react   
     * recibe un callback , regresa objeto de los statates definidos (los states son states de funcione reducers)
     * pues si quiero un state en especifico lo accedo al objeto como es el caso este   
     * un state sera un objet con props , asei desestructuro la prop que necesito ..
    */
    const { msgError } = useSelector( state => state.ui ); 

    const dispatch = useDispatch();

     
    /* anexar hook form a form html , controlar estado del form  (conectar form a reat app )
     * mis custom hook
    */
    const [ formValues, handleInputChange ] = useForm({
        // las props del object estado deben ser igual que el name de los elementos del form  (redefinicion) / en produccion el este objeto de eatdo inicial (sase inicia como string vacio)
        name: 'Hernando',   
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456',
    });

    /* desestructurar el estado  */ 
    const { name ,email ,password ,password2 } = formValues;


    
    /* submit del form con los campos cotrolados 
     * 
    */
    const handleLogin = (e) => {
        e.preventDefault();

        // hacemos validaciones de los campos antes de hacer dispatch de algun accion
        if ( isFormnValid() ) {
          /* en etse nivel he pasado la validacion necesarias para un form . ahora bien , puedo hacer dispatch de alguna accion para registro del user en fairebase
           * y autenticacion
          */

          dispatch( startRegisterWithEmailPasswordName(email, password, name) );

          
        }

        
    }  

    const isFormnValid = () => { 

        if ( name.trim().length === 0 ) {
            
            dispatch( setError('Name is required') )
            
            return false 

        } else if ( !validator.isEmail( email ) ) {
             
            // comprobacion del email si es valido ...... usamos una libreria aprobada : npm i validator
            dispatch( setError('Email is not valid') )
             
            return false;

        } else if ( password !== password2 || password.length < 5 ) {
             
            dispatch( setError('Password should be at least 6 characters and match each other') )
            
            return false
        }
         
        dispatch( removeError() );


       return true;
    
    
    } // esta parte la puede perzonalizar y manejar como meplazca

  
     return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleLogin }>

                { /* mostar mensaje de manera condicional : usar constantes js por eso usamos llaves */
                    msgError && /* si existe no es null ejecutamos la siguiente instruccion  */

                    ( /* entre parentesis parque queda aun mas claro que es el bloque de la condicion */
                        <div className="auth__alert-error">
                            { msgError }
                        </div> /* podemos sustituir con sweetallert perfectamnet 253 */
                    )
                } 
                    
                 {/* estos mensajes de err los podiamos usar por useState o useReducer o cualquier manejador de estado de los que hemos visto hasta el momento  */}
                 {/* en este caso lo manejo con redux - pero si es algo sencillo se usa solo en este componnete lo hacemos con useSTate  */}
                 {/* no es neceseriamente manejamos todo con redux */}

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name } //anexar
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    className="auth__input"
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={ password2 }
                    className="auth__input"
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    ) 
}
