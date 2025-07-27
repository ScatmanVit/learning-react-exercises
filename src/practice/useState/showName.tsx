import { useState, type ChangeEvent } from 'react'

export default function ShowText() {
   const [name, setName] = useState("")


   function showName(e: ChangeEvent<HTMLInputElement>) {
     setName(e.target.value) 
   }

   return (
      <div>
         <label htmlFor="name">Digite seu nome por gentileza</label>
         <input 
            id='name' 
            onChange={showName} 
            type="text" 
            required
         /><br />
         <div style={{ display: "flex", 
               justifyContent: "center", 
               alignItems: "center"
            }}
         >
            <p style={{ fontWeight: "bold" }}>{name}</p>  
         </div>         
      </div>
   );
}