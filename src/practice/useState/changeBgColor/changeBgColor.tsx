import { /*useEffect,*/ useState, type ChangeEvent } from 'react'
import { colors } from './colors'

export default function ChangeBgColor() {
   const [theme, setTheme] = useState<string>("")

   
   /* Usando o useState apenas*/
   function changeColor(e: ChangeEvent<HTMLSelectElement>) {
      const newTheme = e.target.value
      setTheme(newTheme) // useState é assíncrono, por isso ao invés de passar o estado como tema, passei a váriavel criada na função
      document.body.style.backgroundColor = newTheme;
      
   }
   
   /* Usando o useEffect */
   // function changeColorWithEffect(e: ChangeEvent<HTMLSelectElement>) {
   //    setTheme(e.target.value)
   // }
   
   // useEffect(() => {
   // document.body.style.backgroundColor = theme;
   // console.log("Mudou!")
   // }, [theme])



   return (
      <> 
      {/*Usando useState e useEffect */}
          <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 4
         }}
      >
         <h1>Selecione a cor que quiser com useState e useEffect</h1>
         <select value={theme} /*onChange={changeColorWithEffect}*/>
            {colors.map((color, index) => {
               return (
                  <option key={index} value={color}>{color}</option>
               )
            })}
         </select>
         <button onClick={() => setTheme("")}>Resetar Cor</button>   
      </div>

      {/*Usando useState apenas */}
      <div style={{ 
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 4
         }}
      >
         <h1>Selecione a cor que quiser com useState</h1>
         <select value={theme} onChange={changeColor}>
            {colors.map((color, index) => {
               return (
                  <option key={index} value={color}>{color}</option>
               )
            })}
         </select>
         <button onClick={() => document.body.style.backgroundColor = ""}>Resetar Cor</button>   
      </div>
      </>
   )
}


/* Notas: */
/*
   cada select tem um value, que é a option selecionada no momento

   nesse caso: <select value={theme} onChange={changeColor}>
   tive que colocar o estado atual como value para que quando
   o onChange for ativado o select persista na opção selecionada
*/