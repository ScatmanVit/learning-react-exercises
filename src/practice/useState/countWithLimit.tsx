import { useState } from 'react'

export default function CountWithLimited() {
   const [count, setCount] = useState<number>(0)

   function countFunc() {
      setCount(prev => prev + 1)
   }

   return (
      <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: "4px"
         }}
      >
         {
         <button onClick={countFunc} disabled={count === 10}>
            Clique aqui até 10
         </button>
         }
         <p>{count}</p>
         <p style={{ color: "red" }}>
            {count === 10 && "Limite esgotado, resete o contador"}
         </p>

         <button onClick={() => setCount(0)}>
            Resetar
         </button>
      </div>
   )
}

/* Notas: */

/* disabled por padrão é false, e se for adcionado sem parametro é true, 
porém ele pode receber parâmetro condicional, assim: 

   disabled={count === 10}
*/