import { useEffect, useState } from "react"

export default function ScreenCount() {
   const [timer, setTimer] = useState<number>(0)
   const [start, setStart] = useState<boolean>(false)
   const [lastTimer, setLastTimer] = useState<number>(0)

   function pauseTimer() {
      setStart(false)
      setLastTimer(timer)
   }

   function startTimer(){
      setStart(true)
   }

   function resetTimer() {
      setTimer(0)
      setStart(false)
   }

   useEffect(() => {
      let interval: number | null = null
      
      if(start){
            interval = setInterval(() => {
            setTimer(prev => prev + 1)
         }, 1000)
         
      }
      return () => {
         if(interval) clearInterval(interval)
      } 
   }, [start])

   useEffect(() => {
      document.title = `Esse é o seu timer:  ${String(timer)}`
   }, [timer])

   return (
      <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40
         }}
      >
         <h1>
            Olhe o título da tela, lá encima na guia
         </h1>

         <div style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
               alignItems: "center",
               marginTop: 40,
               gap: 20
            }}
         >
            <button onClick={resetTimer}>Resetar</button>
            <button onClick={startTimer}>Iniciar</button>
            <button onClick={pauseTimer}>Pausar</button>
            
            <h3>Último valor do timer: {lastTimer}</h3>
         </div>
         
      </div>
   )
}

