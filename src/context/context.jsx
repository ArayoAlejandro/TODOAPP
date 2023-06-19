import { useState, createContext } from 'react'
import { cardGetLocalStorage } from '../utils'
export const ContextCard = createContext()

export function CardProvider ({ children }) {
  const initialCards = cardGetLocalStorage || []

  const [todo, setTodo] = useState(initialCards)

  return (
    <ContextCard.Provider value={{
      todo,
      setTodo
    }}
    >
      {children}
    </ContextCard.Provider>
  )
}
