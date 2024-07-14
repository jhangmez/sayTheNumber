import React, { useState, useEffect } from 'react'
import { Progress } from '@nextui-org/react'

interface TimerProps {
  initialTime: number
  onTimeEnd?: () => void
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isTimeUp, setIsTimeUp] = useState(false)

  useEffect(() => {
    if (!isTimeUp) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
        if (timeLeft === 1) {
          clearInterval(timerId)
          setIsTimeUp(true)
          if (onTimeEnd) {
            onTimeEnd() // Llama a la función pasada como prop cuando el tiempo haya concluido
          }
        }
      }, 1000)
      return () => clearInterval(timerId)
    }
  }, [isTimeUp, timeLeft, onTimeEnd]) // Agrega timeLeft como dependencia para que el efecto se ejecute nuevamente cuando cambie

  return (
    <div>
      <Progress
        aria-label='Tiempo restante'
        value={((initialTime - timeLeft) / initialTime) * 100}
      />
      {isTimeUp && <p>¡Tiempo agotado!</p>}
    </div>
  )
}

export default Timer
