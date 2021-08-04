* agrupar acciones en su respectivo archivo  :
- acciones que tiene que ver con autenticaciones 
- acciones que tienen que ver con jounal 
- acciones que tienen que ver con interfaz de user
-  etc ... etc ...

 * acciones no son mas de simples funciones , podemos verlos como helperss : aunque los helpers tambian los vamos a crear  

 - podemos decir que las funciones reducer toman decisiones paras manipular sus state dependiendo de acciones que dispatchamos al Redux
  

  * Es decir cuando dispatcho una accion asyncrona lo mando a mdlr thunk aplicado en store para resolverse y cuando se resuelva dispatcho otra accion syncrona y continuo 
    con mi proceso de reducers y modificacion de estate y prover nuevo estado a todos componentes consumidores en la app

   

   // accion async (asi el mdlr redux cuando reciba accion que no returna Objeto , returna una accion (callback): es decir accion asyn => lo va a ejecutar : como es el caso este)
    
    export const startLoginEmailPassword = (email, password) => {
    
        return (dispatch) => { 
            
            - incluso podemos hacer varios dispatch simultaneamente aqui 



            asi vamos a hacer cualquier peticion asyncrona : fetch , posteo de archivos o subirlos en cuyaquier sitio web  
            setTimeout(() =>{
                
              

                dispatch( login(123, ' loulou') );
    
            },3500);
          
          
        
          
        }
    
    
    }




