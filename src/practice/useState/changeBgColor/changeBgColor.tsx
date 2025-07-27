import { useEffect, useState, type ChangeEvent } from 'react'
import { colors } from './colors'

export default function ChangeBgColor() {
   const [theme, setTheme] = useState<string>("")

   function changeColor(e: ChangeEvent<HTMLSelectElement>) {
      setTheme(e.target.value)
   }

   useEffect(() => {
      document.body.style.backgroundColor = theme;
      console.log("Mudou!")
   }, [theme])

   return (
      <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 4
         }}
      >
         <h1>Selecione a cor que quiser ou escolha um dos botões!</h1>
         <select value={theme} onChange={changeColor}>
            {colors.map((color, index) => {
               return (
                  <option key={index} value={color}>{color}</option>
               )
            })}
         </select>
         <button onClick={() => setTheme("")}>Resetar Cor</button>   
      </div>
   )
}

/* Notas: */
/*
   cada select tem um value, que é a option selecionada no momento

   nesse caso: <select value={theme} onChange={changeColor}>
   tive que colocar o estado atual como value para que quando
   o onChange for ativado o select persista na opção selecionada
*/