import { useState, createContext } from 'react'

export const ContextCard = createContext()

export function CardProvider ({ children }) {
  const [todo, setTodo] = useState([])
  const [modal, setModal] = useState(false)

  return (
    <ContextCard.Provider value={{
      modal,
      setModal,
      todo,
      setTodo
    }}
    >
      {children}
    </ContextCard.Provider>
  )
}
