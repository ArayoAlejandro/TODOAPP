import { useState, createContext } from 'react'
import { cardGetLocalStorage } from '../utils'

export const ContextCard = createContext()

export function CardProvider ({ children }) {
  const initialCards = cardGetLocalStorage || []

  const [todo, setTodo] = useState(initialCards)
  const [id, setId] = useState()

  return (
    <ContextCard.Provider value={{
      id,
      setId,
      todo,
      setTodo
    }}
    >
      {children}
    </ContextCard.Provider>
  )
}
