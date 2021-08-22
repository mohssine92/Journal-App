
import { createStore ,combineReducers  , applyMiddleware , compose } from 'redux'; // patron - para controla toda la informacion de la app 
import thunk from 'redux-thunk';  // es mdlr de redux - para ejecutar tareas asynronas , luego , hacer dispatch de una accion ...




/*  Importacion de mis reducers
 *
 *
*/
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

 


// v 240 : permite pasar varios mdlr : en este caso para funcionamiento del tools Redux y 2 mdlr es para ejecutar tareas asyncronas
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;





/* asi esta funcion que voy a mandar a mi store 
 * pues cuando quiero añadir Nueva funcionalidad a mi app , simplemente lo agrego a esta combinacion de reducers
 * hay reducer que econtrola estado de autenticaccion y reducer que .... son muchos estados a controlar en la app
 * *** entonces las llaves son mis states
*/
const reducers = combineReducers({ // este objeto va tener la estructura que va querer que sea su store en general
   auth: authReducer, // podemos decir prop auth: va ser manejada por tal reducer .
   ui: uiReducer,
   notes: notesReducer
})





/* unico inconveniente el store recibe solo un reducer en arg : yo voy a tener varios reducer : asi voy a usar la funcion combineReducers

 * 
*/
export const store = createStore(
   reducers,
  
   composeEnhancers( // me permite applicar la extensiones del devTools y utulizar mdlrs

    applyMiddleware( thunk ) // aplicacion de mdlrs de redux para trabajar tareas async : (call http sttimeout  etc ) V240

   ) 
  

);

/* 
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
); */