import { useState, createContext } from 'react'

export const ContextCard = createContext()

export function CardProvider ({ children }) {
  const [todo, setTodo] = useState([])
  const [modal, setModal] = useState(false)
  const [card, setCard] = useState()

  return (
    <ContextCard.Provider value={{
      card, setCard, modal, setModal, todo, setTodo
    }}
    >
      {children}
    </ContextCard.Provider>
  )
}
