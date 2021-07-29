import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';




/* Router va tener todaS PAGINA RELACIONADAS AL AUTH 
 *
*/
export const AuthRouter = () => {
  
    return (
        <div className="auth__main"> {/* sass : dentro del archivo auth , class  .auth__main */}
           
           <div className="auth__box-container">
              <Switch>  {/* no usa <Router> porque es router de rutas hijas : no es router principal  */}

                   <Route 
                       exact
                       path="/auth/login"
                       component={ LoginScreen }
                   />   
                   <Route 
                       exact
                       path="/auth/register"
                       component={ RegisterScreen }
                   />   
                   <Redirect to="/auth/login" />  

               </Switch>
               
           </div>      

       
        </div>
    )
}
