import React from 'react';


// este provider cumple lo mismo que nosotros hecimos con el context en temas anteriores
import { Provider } from 'react-redux';
//con esta imporatacion le estamos diciendo al react que tiene un store , tiene una fuente unica de la verdad 
import { store } from './store/store';


import { AppRouter } from './routers/AppRouter';




/* punto mas alto de mi app 
 *
*/
export const JournalApp = () => {
  
    return (

 
       <Provider store={ store }> {/* provider va tener mi store a prover a todos componentes de la app - gracias que esta proviendo de un punto alto de la app */}

          <AppRouter />

       </Provider>
      
    )

}
