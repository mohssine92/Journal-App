import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'; // esta importacion Requiere instalacion idependiente - no viene en el paquete inicial de React


/* Todos Componentes llevan screnn , son componentes de pagina seran relacionadas con algun Router : es como estandar para identidficar Facil 
 *
*/
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';




/* Router princiapl de la app  
 * 
*/
export const AppRouter = () => {
  
    return (
        <Router> {/* se usa solamente en el router Princiapl */}

            <div> {/* Recomnendacion crear un div para manejar switch dentro que es componete h.. de rect router */}

                <Switch>
                    <Route 
                        path="/auth" /* no poner axact - porque tiene rutas hijas asociadas añ auth/ */
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" /> {/* es una routa hija del /auth */}


                </Switch>
                
            </div> {/* nota : en el contenedor no tenemos ningin estilos : 1- router su contenedor tiene estilos propios y 2 contrnedor tendra estilos propios globales */}

        </Router>
    )

}
