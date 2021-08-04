* Manejar Reducers
* reducer es una funcion pura nada de otro mundo 
* en reducer configuramos acciones para cada diferente tipo 


* camino : componente => hook dispatch (dispatchar accion ) => store => reducerGenearl => reducer => reducer decision => chanestateReducer => provide new atate all conmsumer view(componente) (<asi facil hacemos dispatch de una accion o acciones>) 



 
 * peticiones asyncronas (peticion http , settimeout etc ...o lo que sea ) (mdlr hace la tarea , cuando se resuelva , llama al dispatch de una nueva accion(sincrona) => para m
- modificar  y returnar nuevo state ) (la modificacion lo hace funcion reducer ) 
- instalacion del thunk : es un mdlr encargado de hacer esta parte especificamente 
- npm i redux-thunk