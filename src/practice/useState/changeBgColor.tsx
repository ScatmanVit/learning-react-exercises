import { useState } from 'react'


export default function ChangeBgColor() {
   const [theme, setTheme] = useState<number>(0)
   
   

   return (
      <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 4
         }}
      >
         <button onClick={}></button>
         <button></button>
         <button></button>
      </div>
   )
}