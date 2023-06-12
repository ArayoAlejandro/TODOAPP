import { useContext } from 'react'
import { ContextCard } from '../context/context'

export const useCard = () => {
  const { card, setCard, modal, setModal, todo, setTodo } = useContext(ContextCard)

  return { card, setCard, modal, setModal, todo, setTodo }
}
