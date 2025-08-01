import { useEffect, useState } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState<number>(0)
  const [start, setStart] = useState<boolean>(false)
  const [lastTimer, setLastTimer] = useState<number>(0)

  useEffect(() => {
    let interval: number | null = null // diz que ela pode ser um number ou null e defini valor padrão como null.

    if (start) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [start])

  function handleStart() {
    if (!start) setStart(true)
  }

  function handlePause() {
    setStart(false)
    setLastTimer(timer)
  }

  function handleReset() {
    setStart(false)
    setTimer(0)
    setLastTimer(0)
  }

  function formatTime(seconds: number) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${minutes}:${secs}`
  }

  return (
    <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40
         }}
      >
      <p>
         {formatTime(timer)}
      </p>

      <button onClick={handleStart}>
         Iniciar
      </button>
      <button onClick={handlePause}>
         Pausar
      </button>
      <button onClick={handleReset}>
         Resetar
      </button>
      <p>
         Último tempo salvo: {formatTime(lastTimer)}
      </p>
    </div>
  )
}

/* NOTAS: */
/*
   useState guarda dados; persiste só enquanto a página tá aberta.
   useEffect cria e limpa setInterval; evita vários timers juntos.
   Sempre limpar intervalo no cleanup do useEffect.
   setTimer(prev => prev + 1) garante estado atualizado.
   Controla timer só com start (true/false).
   Erro comum: criar interval fora do useEffect e não limpar.
   Regra: estado = dado; useEffect = efeito/processo com limpeza.

*/
