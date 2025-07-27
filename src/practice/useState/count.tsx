import { useState, type ChangeEvent } from 'react'


export default function Count() {
   const [count, setCount] = useState<number>(0)
   const [quant, setQuant] = useState<number>(0)


   function addCount() {
      setCount(prev => prev + quant)
   }

   return (
      <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 4
         }}
      >  
         <h1>Quer adcionar mais quantos?</h1>
         <input 
            type="number" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQuant(Number(e.target.value))} 
         />
         <button onClick={addCount}>Click aqui</button>
         <h3>{count}</h3>
      </div>
   );
}


// Notas:

// sempre que o uso do onChange for inline deve se passar o e na arrow function como parametro, SEMPRE
// um input sempre retorna string, mesmo que o tipo dele seja number
