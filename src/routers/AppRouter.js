import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    //Route, como he hemos implementado componnetes de Protecion : estas props se migran a los componnetes de proteccion
    //Redirect
} from 'react-router-dom'; // esta importacion Requiere instalacion idependiente - no viene en el paquete inicial de React


import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';



import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';





/* Router princiapl de la app  
 * 
*/
export const AppRouter = () => {

     const dispatch = useDispatch(); // para hacer dispatch de algun accion (Redux hook)
 
     const [ checking, setChecking ] = useState(true); // puedo usa REdux - stor - pero como es algo solo evaluar en esta pagina : manejo state solo aqui 
     const [ isLoggedIn, setIsLoggedIn ] = useState(false); // su estado es mi punto de referncia saber si esta autenticado o no : asi tomare la decision (condicion para Proteccion de ruatas)


    useEffect(() => {

        /* onAuthStateChanged() crea un Observable cuando un etado de autenticacion se cambia en mi back-end (Firebase)
         * noten cuando mi autentico desde otro componente o refresh imediatamente sera notificado con Objeto de user autenticado - ver clg 
         * aqui notamos que fairebase usa Observadores en la base de datos 
         * tener en cuenta si no estoy autenticado next: Oberver me regresa un Null - en vez de Object user autenticated 
         * NB : como el Proceso de Observable no es instantaneo : por tema de proteccion de rutas va ser depende si la persona esta autenticada 0 no . por fin de no permitir otra persona
         *      se autentica con fairebase encima de autenticacion de otra persona por ello - necesito esperar hasta que resuelva la Observable para saber que voy a renderizar si la ruta 
         *      ir para autenticar o esta autenticado se renderiza la ruta de ojear las rutas de la app (este concept lo hemos visto en secciones anteriores) 
        */
        firebase.auth().onAuthStateChanged( (user) => {
            console.log(user)

            
            if ( user?.uid ) { 
                /* Si  entro al scop realmente existe una autenticacion , no es null (objeto emitido por la Observable)
                 * hago nuevamente dispatch de accion : asi persiste la info del Object user autenticado en mi store - sin necisidad de usar localstorage gracias a Redux
                */
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {

                setIsLoggedIn( false ); // este estado avisa que no existe autenticacion (usado por proteccion de rutas)
            }

             setChecking(false); // para elemento espere ... (en este nivel tengo la respuesta)


        });

        
    }, [ dispatch , setChecking, setIsLoggedIn ])
       /* noten al usar hook de effect y no pasar dependecia se ejecuta la instruccion del scop solo una vez 
        * 
       */






    if ( checking ) {  /* true */
        return (
            <h1>Espere...</h1>
        )
    }
    /* Loading global en la app : manejado por useState solo en este componnete : puedo usar store Readux pero no merece la pena 
     * mientras es true se espera , va ser falso para poder segir renderizando las rutas . cuando va ser false , cuando Observador de db fairebase se resuelva y me notofica 
     * si el user esta autenticado o no  
     * puedo renderizar algun componente que haga algo bonito circulito girando etc ... 
    */


  
    return (
        <Router> {/* se usa solamente en el router Princiapl */}

            <div> {/* Recomnendacion crear un div para manejar switch dentro que es componete h.. de rect router */}

                <Switch>
                  
                    <PublicRoute /* componnete Proteccion 252 */
                        path="/auth"
                        component={ AuthRouter } /* estoy pasando Componente funcion (router de routas hijas) */
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute  /* componnete Proteccion */
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen } // esatoy pasando componnete pagina
                    />

                </Switch>
                
            </div> {/* nota : en el contenedor no tenemos ningin estilos : 1- router su contenedor tiene estilos propios y 2 contrnedor tendra estilos propios globales */}

        </Router>// router principal
    )

}
