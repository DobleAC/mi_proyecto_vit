import { useState } from "react"

export const useCounter = (inicial = 10) => {
   //FIC: use state para "valor"
   const [valor, setValor] = useState(inicial);
   //FIC: function for increment or decrement value
   const acumular = (numero)=> {
       setValor(valor + numero);
   };

   return {
       valor,
       acumular
   }
 
   
}