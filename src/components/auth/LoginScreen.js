import React from 'react';
import { useDispatch /* , useSelector  */} from 'react-redux';






import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {
   
    
    
    // para hacer dispatch , ya react redux me genero un hook  (sirve para hacer dispatch de accines) 
    const dispatch = useDispatch();

    
    
    /* custom hook - controla formulario html  */
    const [ formValues, handleInputChange ] = useForm({ 
        // estado inicial del form
        email: 'nando@gmail.com',
        password: '123456'
    });

    
    // desestructurar los Valores que returna el form : depende los campos hijos del form que controlamos en este caso son 2 campos
    const { email, password } = formValues;


    // manejar submit del form 
    const handleLogin = (e) => {
        e.preventDefault(); // prevent refresh del nav
        //console.log(email , password);

        // ? ahora necesito hacer dispatch de esa accion  
        // en este caso hago dispatch de accion async ; asi cuando se resuelva hace otro dispatch de otra accion syncrona
        // tener en cuenta que las acciones asyncronas dispatchadas se detectan(porque returnan callback) y se ejecutan en mdlr de redux 
        dispatch( startLoginEmailPassword( email, password ) );
    }
    
    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() ); // dispatch de accion asyncrona _ (aprobar implementar contra back de node )
                                        // concepto : accion async va resolver una peticion etc .. luego dispatcha accion syncrona hacia reducer (asi obtenemos nuevo state en el store ) 
    }

    
    
    
    
    
    
    
    
    return (
        <>
           <h3 className="auth__title" > LoginScreen </h3>

           <form onSubmit={ handleLogin }>

              <input 
                       type="text"
                       placeholder="Email"
                       name="email" // Obligatorio : es el que occupa me use form para Obtener el valor que escribio user - para modificar estado inicial del formControl
                       className="auth__input"
                       autoComplete="off"
                       value={ email }
                       onChange={ handleInputChange } // event - dispara accion del hook form 
               />

               <input 
                    type="password"
                    placeholder="Password"
                    name="password" // es importante name de elementos hijo de un form seran lo mismo que el nombre del estado inicial que pasamos al hook de form
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
               />

               <button
                    type="submit"
                    className="btn btn-primary btn-block"
                   /*  disabled={ true } */
                   
                >
                    Login
               </button>

               <hr />

               <div 
                   className="auth__social-networks"
               >

                 <p> Login with social networks </p>
                
                 <div 
                     className="google-btn"
                     onClick={ handleGoogleLogin }
                 >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>

                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>

                 </div>
                

               </div> 

                <Link  /*link de viene en el modulo de reactRouter : obviamente debemos tener router-react implementado para usar este componete de link  */ 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
               </Link> 

           </form>

        </>
    )
   
    
}
